<template>
  <section class="wrapper-page">
    <Header :asideData="asideData" :nav="nav" class="header" />
    <Navigation :nav="nav" />
    <main class="app-page">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header';
import Navigation   from '@/components/Navigation'

export default {
  name: 'default',
  components: { Header, Navigation },
  data: () => ({
    asideData: { isOpen: false, },
    nav: { isOpen: false, },
  }),
};
</script>

<style lang="scss" scoped>
.header {
  background: #0a0b11;
  margin-right: 15px;
}

.app-page {
  position: relative;
  margin: 200px auto 0;
  background: #0a0b11;
  max-width: 1568px;
  padding: 0 30px 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 250px);

  @media screen and (max-width: 560px) {
    margin: 100px auto 0;
    padding: 0 15px 50px;
    min-height: calc(100vh - 150px);
  }
}
.wrapper-page {
  background: #0a0b11;
  height: 100vh;
}
</style>
