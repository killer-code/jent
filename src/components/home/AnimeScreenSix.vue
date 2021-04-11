<template>
  <section class="scene" 
    style="position: fixed;">
      <section class="parallax-scene" v-show="isStatic">
        <img class="parallax-img"
          data-depth="0.05"
          :src="require('@/assets/img/sprites/scene_06/static/static-back-2-min.png')" 
          alt="">

        <img class="parallax-img"
          data-depth="0.1"
          :src="require('@/assets/img/sprites/scene_06/static/static-back-1-min.png')" 
          alt="">
      </section>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenSix',
  props: {
    scroll: Number,
    animationState: Object,
    sprite_img: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_back: require('@/assets/img/sprites/scene_06/back.json'),
    sheet_back: '',
    isStatic: false,
    parallaxInstance: '',
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
    X: function() { return this.width / 1920 },
    Y: function() { return this.height / 1080 }
  },
  mounted() {},
  methods: {
    createScene() {
      const sequence = document.querySelector('#main-scene');
      const self = this; 
      self.app.view.classList.add('scene-006')

      sequence.appendChild(self.app.view);

      if ( self.app.loader.resources.image_back ) {
        self.app.loader
          .load((loader, resources) => {
            const back = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_back  = new this.$PIXI.Spritesheet(back, this.json_back);
          })
      } else {
        self.app.loader
          .add('image_back', this.json_back)
          .load((loader, resources) => {
            const back = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_back  = new this.$PIXI.Spritesheet(back, this.json_back);
          })
      }
    },
    onAssetsLoadedNext() {
      let frames = [];
      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      
      for ( let i = 0; i <= 12; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`back_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .15;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          const treshScene = document.querySelector('.scene-006');
          if ( treshScene ) {
            treshScene.style.display = 'none';
          }

          this.$PIXI.utils.clearTextureCache();
          this.isStatic = true;
          
          const scene = document.querySelector('.parallax-scene');
          this.parallaxInstance = new this.$parallax(scene);
        };

        this.app.stage.addChild(anim);
      }
    },

    onAssetsLoadedUp() {
      let frames = [];
      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }

      for ( let i = 12; i >= 0; i-- ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`back_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          // this.$PIXI.utils.clearTextureCache();

          if ( val === 0 ) {
            this.animationState.five = 'start';
            this.animationState.six = '';

            const treshScene = document.querySelector('.scene-006');
            if ( treshScene ) {
              document.getElementById('main-scene').removeChild(treshScene);
            }
          }
        };

        this.app.stage.addChild(anim);
      }
    }
  },
  watch: {
    'animationState.six': function() {
      if ( this.animationState.six === 'create' ) {
        this.createScene();
      }
      if ( this.animationState.six === 'up' ) {
        const treshScene = document.querySelector('.scene-006');
        if ( treshScene ) {
          treshScene.style.display = 'block';
        }

        this.parallaxInstance = '';
        this.isStatic = false;

        this.sheet_back.parse(() => {
          this.onAssetsLoadedUp();
        }) 
      }
    },
    scroll() {

      if ( this.animationState.six === 'down' ) {
        const thisScene = document.querySelector('.scene-006');
        if ( !thisScene ) {
          this.createScene();
        }
        this.app.ticker.start();
        const treshScene = document.querySelector('.scene-005');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
        this.sheet_back.parse(() => {
          this.onAssetsLoadedNext();
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.parallax-scene {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

}
.parallax-img {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
</style>
