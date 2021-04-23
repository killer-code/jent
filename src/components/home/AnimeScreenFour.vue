<template>
  <section class="scene" 
    style="position: fixed;">
    <!-- <transition name="fade">
      <div v-show="animationState.four === 'start'" class="death-star">
        <div class="major-lasers delay-05">
          <div class="freakin-laser-beam walking-laser-delay-1" 
            style="transform: rotate(3deg); margin-top: 35px;"></div>
        </div>
        <div class="major-lasers delay-1">
          <div class="freakin-laser-beam" 
            style="transform: rotate(-4deg); margin-top: -48px;"></div>
        </div>
        <div class="major-lasers delay-15">
          <div class="freakin-laser-beam walking-laser-delay-2" 
            style="transform: rotate(-6deg); margin-top: -63px;"></div>
        </div>
        <div class="major-lasers delay-05">
          <div class="freakin-laser-beam" 
            style="transform: rotate(5deg); margin-top: 65px;"></div>
        </div>
        <div class="major-lasers delay-15">
          <div class="freakin-laser-beam walking-laser-delay-3" 
            style="transform: rotate(-5deg); margin-top: -55px;"></div>
        </div>
        <div class="major-lasers delay-1">
          <div class="freakin-laser-beam" 
            style="transform: rotate(2deg); margin-top: 40px;"></div>
        </div>
        <div class="major-lasers delay-05">
          <div class="freakin-laser-beam walking-laser-delay-4" 
            style="transform: rotate(-2deg); margin-top: -20px;"></div>
        </div>
        <div class="major-lasers delay-15">
          <div class="freakin-laser-beam" 
            style="transform: rotate(1deg); margin-top: 25px;"></div>
        </div>
        <div class="major-lasers delay-1">
          <div class="freakin-laser-beam walking-laser-delay-5" 
            style="transform: rotate(-1deg); margin-top: -15px;"></div>
        </div>
        <div class="major-lasers delay-05">
          <div class="freakin-laser-beam" 
            style="transform: rotate(0deg); margin-top: 5px;"></div>
        </div>
      </div>
    </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenFour',
  props: {
    scroll: Number,
    scrollpage: Object,
    animationState: Object,
    sprite_img_line: Image,
    sprite_img_flackon: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_lines:   require('@/assets/img/sprites/scene_04/lines-2.json'),
    json_flackon: require('@/assets/img/sprites/scene_04/flackon.json'),

    sheet_lines: '',
    sheet_flackon: '',
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width,
        height: this.height,
      });
    },
    X: function() { 
      if ( this.width > this.height ) {
        return this.width / 1920;
      } else {
        return .7;
      }
    },
    Y: function() { 
      if ( this.width > this.height ) {
        return this.height / 1080;
      } else {
        return .7;
      }
    },
  },
  mounted() {},
  methods: {
    createScene() {
      const sequence = document.querySelector('#main-scene');
      const self = this; 

      self.app.view.classList.add('scene-004');
      sequence.appendChild(self.app.view);
      if ( self.app.loader.resources.image_flackon ) { // self.app.loader.resources.image_lines && 
        self.app.loader
          .load((loader, resources) => {
            const lines = new this.$PIXI.Texture.from(this.sprite_img_line);
            self.sheet_lines  = new this.$PIXI.Spritesheet(lines, this.json_lines);

            const flackon = new this.$PIXI.Texture.from(this.sprite_img_flackon);
            self.sheet_flackon  = new this.$PIXI.Spritesheet(flackon, this.json_flackon);

            this.sheet_flackon.parse(() => {
              this.onAssetsLoadedFlackon();
            })
          })
      } else {
        self.app.loader
          .add('image_lines', this.json_lines)
          .add('image_flackon', this.json_flackon)
          .load((loader, resources) => {
            const lines = new this.$PIXI.Texture.from(this.sprite_img_line);
            self.sheet_lines  = new this.$PIXI.Spritesheet(lines, this.json_lines);

            const flackon = new this.$PIXI.Texture.from(this.sprite_img_flackon);
            self.sheet_flackon  = new this.$PIXI.Spritesheet(flackon, this.json_flackon);
            
            this.sheet_lines.parse(() => {
              this.onAssetsLoadedNext();
            })

            this.sheet_flackon.parse(() => {
              this.onAssetsLoadedFlackon();
            })
          })
      }
    },
    onAssetsLoadedNext() {
      const blurFilter = new this.$PIXI.filters.BlurFilter();
      blurFilter.blurX = 20;
      blurFilter.blurY = 8;
      blurFilter.repeatEdgePixels = true;

      let frames = [];
      let container = new this.$PIXI.Container();

      for ( let i = 0; i <= 29; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`lines_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .3;
        anim.scale.set(this.X, .8);
        anim.loop = true;
        anim.play();

        container.addChild(anim);
      }
      container.filters = [blurFilter];
      this.app.stage.addChild(container);
    },
    onAssetsLoadedFlackon() {
      let frames = [];

      for ( let i = 0; i <= 18; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`flackon_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .15;
        anim.scale.set(this.X, this.Y);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
  },
  watch: {
    'animationState.four': function() {
      this.$PIXI.utils.clearTextureCache();
      if ( this.animationState.four === 'start' ) {
        this.createScene();
        this.app.ticker.start();

        const treshScene = document.querySelector('.scene-003');
        const mainScene = document.getElementById('main-scene');
        if ( treshScene ) {
          mainScene.removeChild(treshScene)
        }

        // setTimeout(() => {
        //   // this.sheet_lines.parse(() => {
        //   //   this.onAssetsLoadedNext();
        //   // })
        //   this.sheet_flackon.parse(() => {
        //     this.onAssetsLoadedFlackon();
        //   })
        // }, 150)

        setTimeout(() => {
          this.animationState.five = 'create'
        }, 1500)
      }
    },
    scroll() {;
      if ( this.scroll === 2 ) {
        this.$PIXI.utils.clearTextureCache();
        this.app.ticker.stop();
        const treshScene = document.querySelector('.scene-004');
        const mainScene = document.getElementById('main-scene');
        if ( treshScene ) {
          mainScene.removeChild(treshScene)
        }
      }

      if ( this.scroll === 4 ) {
        this.$PIXI.utils.clearTextureCache();
        this.app.ticker.stop();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$laser: #fff;

// .death-star {
//   display: flex;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   .major-lasers {
//     z-index: 10000;
//     position: relative;
//     animation: laser-pulse 1s ease infinite;
//   }
//   .freakin-laser-beam {
//     opacity: .7;
//     z-index: 1000;
//     border-radius: 88px;
//     filter: blur(5px);
//     background-color: lighten(yellow,10);
//     transform: rotate(2deg);

//     &::after {
//       content: '';
//       position: absolute;
//       width: 0;
//       height: 3px;
//       border-radius: 0 100px 100px 0;
//       background-color: lighten(#fff,10);
//       box-shadow: 0 0 15px 0 #360000e7, 0 0 30px 20px #eb0202ef, 0 0 50px 10px #fc9d0fef;

//       animation-name: laser-start;
//       animation-duration: 3s;
//       animation-delay: 1s;
//       animation-timing-function: easy-out;
//       animation-iteration-count: 1;
//       animation-fill-mode: both;
//     }
//   }

//   .delay-05 { animation-delay: .5s; }
//   .delay-1  { animation-delay: 1s; }
//   .delay-15 { animation-delay: 1.5s; }
// } 

// .walking-laser-delay-1,
// .walking-laser-delay-2,
// .walking-laser-delay-3,
// .walking-laser-delay-4,
// .walking-laser-delay-5 {
//   position: absolute;

//   animation-name: laser-go;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   animation-fill-mode: none;
// }
// .walking-laser-delay-1 { animation-delay: .3s; animation-duration: 2s; }
// .walking-laser-delay-2 { animation-delay: 4s; animation-duration: 3s; }
// .walking-laser-delay-3 { animation-delay: 5s; animation-duration: .5s; }
// .walking-laser-delay-4 { animation-delay: 1.1s; animation-duration: 1s; }
// .walking-laser-delay-5 { animation-delay: .75s; animation-duration: 3s; }

// // Define Animation

// @keyframes laser-pulse {
//   0% { opacity: 1 };
//   10% { opacity: 1 };
//   30% { opacity: .8 };
//   35% { opacity: 1 };
//   40% { opacity: .7 };
//   50% { opacity: 1 };
//   60% { opacity: .9 };
//   70% { opacity: 1 };
//   80% { opacity: .9 };
//   90% { opacity: 1 };
//   100% { opacity: inherit };
// }

// @keyframes laser-start {
//   from { width: .9vw };
//   to   { width: 109.9vw };
// }

// @keyframes laser-go {
//   from { width: 0vw; }
//   to   { width: 100vw; }
// }

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .3s ease;
// }
// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>
