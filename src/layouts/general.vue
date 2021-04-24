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

    <Preloader v-if="!loaded" />

    <!-- <CanvasBackground v-if="scroll == 0 || scroll == 1 || scroll == 5"
      :scroll="scroll" /> -->
    
    <MainScene :screen="scroll" v-if="!isMob" />

    <AnimeScreenOne
      v-if="!isMob"
      :animationState="animationState"
      :scrollpage="$refs.fullpage"
      :sprite_img="images[0]"
      :loaded="loaded"
      :scroll="scroll" />

    <AnimeScreenTwo
      v-if="!isMob"
      :animationState="animationState"
      :scrollpage="$refs.fullpage"
      :sprite_img="images[1]"
      :loaded="loaded"
      :scroll="scroll" />

    <AnimeScreenThree
      v-if="!isMob"
      :animationState="animationState"
      :scrollpage="$refs.fullpage"
      :scroll="scroll" />

    <AnimeScreenFour
      v-if="!isMob"
      :animationState="animationState"
      :sprite_img_flackon="images[3]"
      :sprite_img_line="images[2]"
      :scrollpage="$refs.fullpage"
      :scroll="scroll" />

    <AnimeScreenFive
      v-if="!isMob"
      :animationState="animationState"
      :scrollpage="$refs.fullpage"
      :sprite_img="images[4]"
      :scroll="scroll" />

    <AnimeScreenSix
      v-if="!isMob"
      :animationState="animationState"
      :scrollpage="$refs.fullpage"
      :sprite_img="images[5]"
      :scroll="scroll" />

    <full-page ref="fullpage" id="fullpage" :skip-init="true" :options="options">
      <transition name="fade" mode="out-in">
        <router-view :asideData="asideData" :screen="scroll" :loaded="loaded" />
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

import MainScene        from '@/components/home/MainScene'
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
    MainScene,
    AnimeScreenOne,
    AnimeScreenTwo,
    AnimeScreenThree, 
    AnimeScreenFour,
    AnimeScreenFive,
    AnimeScreenSix,
    
    CanvasBackground,
  },
  data: () => ({
    loaded: false,

    asideData: { 
      isOpen: false,
    },
    nav: { isOpen: false, },
    scroll: 0,
    animationState: {
      one: 'start',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
    },
    isMob: window.innerWidth < 560,
    images: [],
    sprites: [
      '/scene_01/rotate.png',
      '/scene_02/pshick-2.png',
      '/scene_04/lines-2.webp',
      '/scene_04/flackon.png',
      '/scene_05/neon-2.webp',
      '/scene_06/back.png',
    ],
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
      if ( direction === 'down' ) {
        if ( this.scroll === 0 ) {
          this.scroll ++;
          this.animationState.one = '';
          this.animationState.two = 'down';
          return;
        } 
        if ( this.scroll === 1 ) {
          this.scroll ++;
          this.animationState.two = '';
          this.animationState.three = 'start';
          return;
        } 
        if ( this.scroll === 2 ) {
          this.scroll ++;
          this.animationState.three = '';
          this.animationState.four = 'start';
          return;
        } 
        if ( this.scroll === 3 ) {
          this.scroll ++;
          this.animationState.four = '';
          this.animationState.five = 'down';
          return;
        } 
        if ( this.scroll === 4 ) {
          this.scroll ++;
          this.animationState.five = '';
          this.animationState.six = 'down';
          return;
        } 
      } else {
        if ( this.scroll === 1 ) {
          this.scroll --;
          this.animationState.one = '';
          this.animationState.two = 'up';
          return;
        }
        if ( this.scroll === 2 ) {
          this.scroll --;
          this.animationState.two = 'start';
          this.animationState.three = '';
          return;
        } 
        if ( this.scroll === 3 ) {
          this.scroll --;
          this.animationState.five = '';
          this.animationState.three = 'start';
          this.animationState.four = '';
          return;
        } 
        if ( this.scroll === 4 ) {
          this.scroll --;
          this.animationState.five = 'up';
          return;
        }  
        if ( this.scroll === 5 ) {
          this.scroll --;
          this.animationState.six = 'up';
          return;
        }  
      }
    },
    scrollDown() {
      this.$refs.fullpage.api.moveSectionDown();
    },
    preload(sprites) {
      for (let i = 0; i < sprites.length; i++) {
        this.images[i] = new Image();
        this.images[i].src = require(`@/assets/img/sprites${sprites[i]}`)
      }
    },
    supportsWebGL() {
      try {
        return !!window.WebGLRenderingContext && 
          (!!document.createElement('canvas').getContext('webgl') || !!document.createElement('canvas').getContext('webgl2'));
      } catch( e ) {
          console.log(e)
          return false;
      }
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
  created() {
    window.addEventListener('load', e => {
      let refs = this.$refs
      if ( window.innerWidth > 560 ) {
        let fullpageEnabled = document.documentElement.classList.contains('fp-enabled')
        
        if (!fullpageEnabled) {
          refs.fullpage.init()
        } else {
          document.documentElement.classList.remove('fp-enabled')
          refs.fullpage.destroy('all')
          refs.fullpage.init()
        }
      } else {
        const element = document.querySelector('.fp-enabled');
        if ( element ) {
          element.classList.remove('fp-enabled');
          document.querySelector('body').style.overflow = 'auto';
        }
        document.documentElement.classList.remove('fp-enabled')
        refs.fullpage.destroy('all')
      }

      setTimeout(() => {
        this.loaded = true;
      }, 1000)
    })
    if ( !this.loaded ) {
      setTimeout(() => {
        this.loaded = true;
      }, 7000)
    }

    this.supportsWebGL() ? console.log('It is live') : this.$router.push({ name: 'HomeStatic' })
  },
  mounted() {
    const west = document.querySelector('.west');
    west.addEventListener('wheel', e => {
      const el = e.target.closest('.aside_wrap');
      el.scrollTop += e.deltaY;
    });
    if ( !this.isMob ) {
      this.preload(this.sprites);
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