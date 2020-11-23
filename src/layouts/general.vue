<template>
  <section class="main">
    <section>
      <WestSide :asideData="asideData" />
    </section>

    <section>
      <Header :asideData="asideData" :nav="nav" />
    </section>

    <section>
      <Navigation :nav="nav" />
    </section>

    <!-- <Preloader v-show="!loaded" :process="process" @load="changeLoad" /> -->

    <CanvasBackground :loaded="loaded" />

    <!-- <AnimationOne v-show="loaded" 
      :scroll="scroll" 
      :json_1="json_0" 
      :sprite_1="sprite_0"
      @process="changeLoad" /> -->
    <!-- <AnimationTwo :scroll="scroll" 
      :json_2="json_2"
      :sprite_2="sprite_2"
      v-show="scroll === 1" /> -->

    <full-page ref="fullpage" id="fullpage" :options="options">
      <router-view :asideData="asideData" :screen="scroll" />
    </full-page>
    <Footer :scroll="scroll" @down="scrollDown" v-if="scroll != 5" />
  </section>
</template>

<script>
import Header     from '@/components/Header'
import Footer     from '@/components/Footer'
import WestSide   from '@/components/WestSide'
import Navigation from '@/components/Navigation'

import Preloader from '@/components/Preloader'

import AnimationOne from '@/components/home/AnimationOne'
import AnimationTwo from '@/components/home/AnimationTwo'
import CanvasBackground from '@/components/home/CanvasBackground'

export default {
  name: 'general',
  components: { 
    Header, 
    Footer, 
    WestSide, 
    Navigation,

    Preloader,
    AnimationOne, 
    AnimationTwo,
    CanvasBackground
  },
  data: () => ({
    process: false,
    loaded: false,

    json_0: require('@/assets/img/sprites/scene/screen-00.json'),
    sprite_0: require('@/assets/img/sprites/scene/screen-00.png'),
    // json_1: require('@/assets/img/sprites/scene-1/screen-1.json'),
    // sprite_1: require('@/assets/img/sprites/scene-1/screen-1.png'),
    // json_2: require('@/assets/img/sprites/scene-2/screen-2.json'),
    // sprite_2: require('@/assets/img/sprites/scene-2/screen-2.png'),

    asideData: { isOpen: false, },
    nav: { isOpen: false, },
    scroll: 0,
  }),
  computed: {
    options: function() {
      return {
        licenseKey: 'BSD-3-Clause',
        onLeave: this.onLeave,
        fitToSectionDelay: 1500,
        scrollingSpeed: 500,
      }
    }
  },
  methods: {
    onLeave(index, nexIndex, direction) {
      if ( direction === 'down' )
        this.scroll ++;
      else {
        this.scroll --;
      }
    },
    changeLoad() {
      setTimeout(() => { this.loaded = true; }, 2000)
    },
    changeProcess() {
      setTimeout(() => { this.process = true; }, 100)
    },
    scrollDown() {
      this.$refs.fullpage.api.moveSectionDown();
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>

<style lang="scss">
.canvas {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
.opacity {
  opacity: 0;
}
</style>