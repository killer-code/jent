<template>
  <section class="wrapper-page">
    <Header :asideData="asideData" :nav="nav" />
    <Navigation :nav="nav" />
    
    <main class="app-page">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default {
  name: 'default',
  components: { Header, Navigation },
  data: () => ({
    asideData: { isOpen: false, },
    nav: { isOpen: false, },
  }),
}
</script>

<style lang="scss" scoped>
.app-page {
  position: relative;
  margin: 200px auto 50px;
  max-width: 1200px;
  padding: 0 30px;
  z-index: 1;
}
.wrapper-page {
  background:#0A0B11;
  width: 100vw;
  height: 100vh;
}
</style>
