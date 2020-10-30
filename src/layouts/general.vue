<template>
  <section>
    <Header />
    <full-page ref="fullpage" id="fullpage" :options="options">
      <router-view/>
    </full-page>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'general',
  components: { Header, Footer },
  data: () => ({
    options: {
      licenseKey: 'BSD-3-Clause',
    }
  }),
}
</script>