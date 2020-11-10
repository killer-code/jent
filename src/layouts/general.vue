<template>
  <section class="main">
    <section>
      <WestSide :asideData="asideData" />
    </section>
    <section>
      <Header :asideData="asideData" />
    </section>

    <AnimationOne :scroll="scroll" 
      :json_1="json_0" 
      :sprite_1="sprite_0" />
    <!-- <AnimationTwo :scroll="scroll" 
      :json_2="json_2"
      :sprite_2="sprite_2"
      v-show="scroll === 1" /> -->

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
import AnimationTwo from '@/components/home/AnimationTwo'

export default {
  name: 'general',
  components: { Header, Footer, WestSide, AnimationOne, AnimationTwo },
  data: () => ({
    json_0: require('@/assets/img/sprites/scene/screen-0.json'),
    sprite_0: require('@/assets/img/sprites/scene/screen-0.webp'),
    // json_1: require('@/assets/img/sprites/scene-1/screen-1.json'),
    // sprite_1: require('@/assets/img/sprites/scene-1/screen-1.png'),
    // json_2: require('@/assets/img/sprites/scene-2/screen-2.json'),
    // sprite_2: require('@/assets/img/sprites/scene-2/screen-2.png'),

    asideData: {
      isOpen: false,
    },
    scroll: 0,
  }),
  computed: {
    options: function() {
      return {
        licenseKey: 'BSD-3-Clause',
        onLeave: this.onLeave,
        fitToSectionDelay: 5000,
        scrollingSpeed: 2000,
      }
    }
  },
  methods: {
    onLeave(index, nexIndex, direction) {
      if ( direction === 'down' )
        this.scroll ++;
      else {
        this.scroll --;
      }
    },
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
.opacity {
  opacity: 0;
}
</style>