<template>
  <div class="home">
    <div class="section">
      <ScreenOne :asideData="asideData" 
        :getAsideData="getAsideData" />
    </div>
    <div class="section">
      <ScreenTwo :asideData="asideData" 
        :getAsideData="getAsideData"/>
    </div>
    <div class="section">
      <ScreenThree />
    </div>
    <div class="section">
      <ScreenFour :screen="screen" />
    </div>
    <div class="section">
      <ScreenFive />
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
import ScreenSix  from '@/components/home/ScreenSix'

// import * as db from '@/api/data.json'

export default {
  name: 'Home',
  props: ['asideData', 'screen'],
  metaInfo: {
    title: 'Jent',
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
  computed: {
    ...mapGetters(['getAsideData']),
  },
}
</script>
