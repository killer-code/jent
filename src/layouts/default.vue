<template>
  <section>
    <Header :asideData="asideData" />
    <CanvasBackground />
    <main class="app-page">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header'
import CanvasBackground from '@/components/home/CanvasBackground'

export default {
  name: 'default',
  components: { Header, CanvasBackground },
  data: () => ({
    asideData: {
      isOpen: false,
    },
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
</style>
