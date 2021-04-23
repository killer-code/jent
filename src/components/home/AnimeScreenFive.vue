<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-5"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenFive',
  props: {
    scroll: Number,
    sprite_img: Image,
    scrollpage: Object,
    animationState: Object,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    json_neon: require('@/assets/img/sprites/scene_05/neon-2.json'),
    sheet_neon: '',
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

      self.app.view.classList.add('scene-005');
      sequence.appendChild(self.app.view);
      if ( self.app.loader.resources.image_neon ) {
        self.app.loader
          .load((loader, resources) => {
            const neon = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);
          })
      } else {
        self.app.loader
          .add('image_neon', this.json_neon)
          .load((loader, resources) => {
            const neon = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);
          })
      }
    },
    onAssetsLoadedNext() {
      this.scrollpage.api.setAllowScrolling(false)
      document.querySelector('.scene-005').style.display = 'block';
      let frames = [];

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      for ( let i = 0; i <= 13; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .1;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
          this.animationState.six = 'create';
          this.sheet_neon.parse(() => {
            this.onAssetsLoadedRepeat();
          })
          this.scrollpage.api.setAllowScrolling(true)
          const treshScene = document.querySelector('.scene-004');
          if ( treshScene ) {
            document.getElementById('main-scene').removeChild(treshScene);
          }
        };

        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedRepeat() {
      let frames = [];

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      for ( let i = 14; i <= 25; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .05;
        anim.scale.set(this.X, this.Y);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedUp() {
      let frames = [];
      this.scrollpage.api.setAllowScrolling(false)
      document.querySelector('.scene-005').style.display = 'block';

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      for ( let i = 13; i >= 0; i-- ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .15;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.animationState.five = '';
          this.animationState.four = 'start';
          this.app.ticker.stop();

          const treshScene = document.querySelector('.scene-005');
          if ( treshScene ) {
              document.getElementById('main-scene').removeChild(treshScene);
          }

          this.scrollpage.api.setAllowScrolling(true)
          this.$PIXI.utils.clearTextureCache();
        };

        this.app.stage.addChild(anim);
      }
    },
  },
  watch: {
    'animationState.five': function() {
      if ( this.animationState.five === 'create' ) {
        this.createScene();
        document.querySelector('.scene-005').style.display = 'none';
      }
      if ( this.animationState.five === 'start' ) {
        this.createScene();
        this.app.ticker.start();
        setTimeout(() => {
          this.sheet_neon.parse(() => {
            this.onAssetsLoadedRepeat();
          })
        }, 1500)
      }
    },
    scroll() {
      if ( this.animationState.five === 'down' ) {
        this.app.ticker.start();

        const treshScene = document.querySelector('.scene-004');
        const thisScene = document.querySelector('.scene-005');

        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
        if (!thisScene) {
          this.createScene();
        }

        this.sheet_neon.parse(() => {
          this.onAssetsLoadedNext();
        }) 
      }
      if ( this.animationState.five === 'up' ) {
        this.app.ticker.start();
        this.sheet_neon.parse(() => {
          this.onAssetsLoadedUp();
        })
        const treshScene = document.querySelector('.scene-006');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
      }
      if ( this.scroll === 5 ) {
        this.app.ticker.stop();
        this.$PIXI.utils.clearTextureCache();
      }
    }
  }
}
</script>