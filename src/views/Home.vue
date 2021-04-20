<template>
  <div class="home">
    <div class="section">
      <ScreenOne :asideData="asideData" 
        :loaded="loaded"
        :getAsideData="getAsideData" />
    </div>
    <div class="section">
      <ScreenTwo :asideData="asideData" 
        :getAsideData="getAsideData"
        :offset="offset" />
    </div>
    <div class="section">
      <ScreenThree :offset="offset" />
    </div>
    <div class="section">
      <ScreenFour :screen="screen" />
    </div>
    <div class="section">
      <ScreenFive :offset="offset" />
    </div>
    <div class="section">
      <ScreenSix />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenOne   from '@/components/home/ScreenOne'
import ScreenTwo   from '@/components/home/ScreenTwo'
import ScreenThree from '@/components/home/ScreenThree'
import ScreenFour  from '@/components/home/ScreenFour'
import ScreenFive  from '@/components/home/ScreenFive'
import ScreenSix   from '@/components/home/ScreenSix'

export default {
  name: 'Home',
  props: ['asideData', 'screen', 'loaded'],
  metaInfo: {
    title: 'Спрей для улучшения мужской потенции джент | Jent',
    meta: [
      { vmid: 'description', property: 'description', 
        content: 'Джент — это инновационное средство для усиления потенции в удобном ' +
          'формате спрея для приема внутрь. Джент воздействует на естественные механизмы ' + 
          'возникновения эрекции и начинаетдействовать уже через 10 минут.' 
      },
    ],
    htmlAttrs: {
      lang: 'ru',
    }
  },
  components: { 
    ScreenOne, 
    ScreenTwo, 
    ScreenThree, 
    ScreenFour,
    ScreenFive,
    ScreenSix,
  },
  data: () => ({
    isMobile: window.innerWidth < 561,
    offset: 0,
  }),
  computed: {
    ...mapGetters(['getAsideData']),
  },
  mounted() {
    document.querySelector('body').classList.remove('blocked')
    document.querySelector('html').classList.remove('blocked')

    window.addEventListener('scroll', e => {
      this.offset =  window.pageYOffset;
    })
  },
  watch: {}
}
</script>
