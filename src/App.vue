<template>
  <div id="app">
    <vue-extend-layouts/>
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  components: { VueExtendLayouts },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }),
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
