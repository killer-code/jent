<template>
  <section>
    <Header :asideData="asideData" />

    <main class="app-page">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'default',
  components: { Header },
  data: () => ({
    asideData: {
      isOpen: false,
    },
  }),
}
</script>

<style lang="scss" scoped>
.app-page {
  margin: 200px auto 50px;
  max-width: 1200px;
  padding: 0 30px;
}
</style>
