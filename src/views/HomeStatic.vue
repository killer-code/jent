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

import ScreenOne   from '@/components/home/static/ScreenOne'
import ScreenTwo   from '@/components/home/static/ScreenTwo'
import ScreenThree from '@/components/home/static/ScreenThree'
import ScreenFour  from '@/components/home/static/ScreenFour'
import ScreenFive  from '@/components/home/static/ScreenFive'
import ScreenSix   from '@/components/home/static/ScreenSix'

// import * as db from '@/api/data.json'

export default {
  name: 'HomeStatic',
  props: ['asideData', 'screen'],
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
