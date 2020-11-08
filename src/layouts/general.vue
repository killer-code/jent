<template>
  <section class="main">
    <section>
      <WestSide :asideData="asideData" />
    </section>
    <section>
      <Header :asideData="asideData" />
    </section>

    <AnimationOne />

    <full-page ref="fullpage" id="fullpage" :options="options">
      <router-view :asideData="asideData" />
    </full-page>
    <Footer />
  </section>
</template>

<script>
import Header   from '@/components/Header'
import Footer   from '@/components/Footer'
import WestSide from '@/components/WestSide'

import AnimationOne from '@/components/home/AnimationOne'

export default {
  name: 'general',
  components: { Header, Footer, WestSide, AnimationOne },
  data: () => ({
    asideData: {
      isOpen: false,
    },
    scroll: 0,
  }),
  computed: {
    options: function() {
      return {
        afterLoad: this.afterLoad,
        licenseKey: 'BSD-3-Clause',
      }
    }
  },
  mounted() {
    console.log(this.scroll);
  },
  methods: {
    afterLoad() {
      if ( this.$refs.fullpage.api ) {
        this.scroll = this.$refs.fullpage.api.getActiveSection().index;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>

<style lang="scss">
.canvas {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>