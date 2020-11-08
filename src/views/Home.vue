<template>
  <div class="home">
    <div class="section">
      <ScreenOne :asideData="asideData" 
        :getAsideData="getAsideData" />
    </div>
    <div class="section">
      <ScreenTwo />
    </div>
    <div class="section">
      <ScreenThree />
    </div>
    <div class="section">
      <ScreenFour />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenOne   from '@/components/home/ScreenOne'
import ScreenTwo   from '@/components/home/ScreenTwo'
import ScreenThree from '@/components/home/ScreenThree'
import ScreenFour  from '@/components/home/ScreenFour'

// import * as db from '@/api/data.json'

export default {
  name: 'Home',
  props: ['asideData'],
  components: { ScreenOne, ScreenTwo, ScreenThree, ScreenFour },
  computed: {
    ...mapGetters(['getAsideData']),
  },
}
</script>
