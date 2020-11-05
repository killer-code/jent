<template>
  <section class="main">
    <section>
      <WestSide :asideData="asideData" />
    </section>
    <section>
      <Header :asideData="asideData" />
    </section>
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

export default {
  name: 'general',
  components: { Header, Footer, WestSide },
  data: () => ({
    options: {
      licenseKey: 'BSD-3-Clause',
    },
    asideData: {
      isOpen: false,
    }
  }),
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>