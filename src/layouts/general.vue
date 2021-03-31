<template>
  <section class="main">
    <section class="west">
      <WestSide :asideData="asideData" />
    </section>

    <section>
      <Header :asideData="asideData" :nav="nav" />
    </section>

    <section>
      <Navigation :nav="nav" />
    </section>

    <Preloader v-show="!loaded" :process="process" @load="changeLoad" />

    <!-- <CanvasBackground :loaded="loaded" /> -->

    <AnimeScreenOne v-show="loaded && scroll === 0" 
      :scroll="scroll" 
      @process="changeLoad" />

    <!-- <AnimeScreenTwo v-show="loaded && scroll === 1" 
      :scroll="scroll" 
      @process="changeLoad" /> -->

    <AnimeScreenThree v-show="loaded && scroll === 2" 
      :scroll="scroll" 
      @process="changeLoad" />

   <!-- <AnimeScreenFour v-show="loaded && scroll === 3" 
      :scroll="scroll" 
      @process="changeLoad" /> -->

    <!-- <AnimeScreenFive v-show="loaded && scroll === 4" 
      :scroll="scroll" 
      @process="changeLoad" />

    <AnimeScreenSix v-show="loaded && scroll === 5" 
      :scroll="scroll" 
      @process="changeLoad" /> -->

    <full-page ref="fullpage" id="fullpage" :options="options">
      <transition name="fade" mode="out-in">
        <router-view :asideData="asideData" :screen="scroll" />
      </transition>
    </full-page>

    <Footer :scroll="scroll" 
      @down="scrollDown" 
      v-if="scroll != 5 && !isMob" />
  </section>
</template>

<script>
import Header     from '@/components/Header'
import Footer     from '@/components/Footer'
import WestSide   from '@/components/WestSide'
import Navigation from '@/components/Navigation'

import Preloader from '@/components/Preloader'

import AnimeScreenOne   from '@/components/home/AnimeScreenOne'
import AnimeScreenTwo   from '@/components/home/AnimeScreenTwo'
import AnimeScreenThree from '@/components/home/AnimeScreenThree'
import AnimeScreenFour  from '@/components/home/AnimeScreenFour'
import AnimeScreenFive  from '@/components/home/AnimeScreenFive'
import AnimeScreenSix   from '@/components/home/AnimeScreenSix'

import CanvasBackground from '@/components/home/CanvasBackground'

export default {
  name: 'general',
  components: { 
    Header, 
    Footer, 
    WestSide, 
    Navigation,

    Preloader,
    AnimeScreenOne,
    AnimeScreenTwo,
    AnimeScreenThree, 
    AnimeScreenFour,
    AnimeScreenFive,
    AnimeScreenSix,
    
    CanvasBackground,
  },
  data: () => ({
    process: false,
    loaded: false,

    asideData: { 
      isOpen: false,
    },
    nav: { isOpen: false, },
    scroll: 0,
    isMob: window.innerWidth < 560,
  }),
  computed: {
    options: function() {
      return {
        licenseKey: 'BSD-3-Clause',
        onLeave: this.onLeave,
        fitToSectionDelay: 1000,
        scrollingSpeed: 2000,
      }
    },
    isAsideActive: function() {
      return this.asideData.isOpen;
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
    },
  },
  watch: {
    isAsideActive() {
      if ( this.isAsideActive ) {
        this.$refs.fullpage.api.setAllowScrolling(false);
      } else {
        this.$refs.fullpage.api.setAllowScrolling(true);
      }
    }
  },
  mounted() {
    const west = document.querySelector('.west');
    west.addEventListener('wheel', e => {
      const el = e.target.closest('.aside_wrap');
      el.scrollTop += e.deltaY;
    })
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
.footer {
  @media screen and (max-width: 560px) {
    display: none;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>