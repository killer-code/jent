<template>
  <div id="app">
    <vue-extend-layouts/>

    <section v-show="!isOld" class="disc">
      <Disclaimer />
    </section>
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

import Disclaimer from '@/components/Disclaimer'

export default {
  name: 'App',
  components: { VueExtendLayouts, Disclaimer },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }),
  computed: {
    isOld: function() {
      return localStorage.getItem('old');
    }
  },
  mounted() {
    window.addEventListener('resize', e => {
      console.log(e.currentTarget.visualViewport);
      if ( Math.abs(e.currentTarget.visualViewport.height - this.height) > 100 || 
           Math.abs(e.currentTarget.visualViewport.width - this.width) > 200 ) {
            window.location.reload();
      }
      if ( this.width > this.height  ) {
        if ( e.target.outerWidth < e.target.outerHeight ) {
          window.location.reload();
        }
      }
      if ( this.width < this.height  ) {
        if ( e.target.outerWidth > e.target.outerHeight ) {
          window.location.reload();
        }
      }
    })
    window.addEventListener("orientationchange", () => {
      window.location.reload();
    }, false);
  }
}
</script>

<style lang="scss" scoped>
.disc {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000000;
}
</style>
