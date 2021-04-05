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
    animationState: Object,
    sprite_img: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    json_neon:   require('@/assets/img/sprites/scene_05/neon-2.json'),
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
    X: function() { return this.width / 1920 },
    Y: function() { return this.height / 980 }
  },
  mounted() {
    this.$PIXI.settings.ANISOTROPIC_LEVEL = 8;
    this.$PIXI.settings.TARGET_FPMS = 0.05;
  },
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
        anim.animationSpeed = .4;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
          this.animationState.six = 'create';
          this.sheet_neon.parse(() => {
            this.onAssetsLoadedRepeat();
          })
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
        anim.animationSpeed = .7;
        anim.scale.set(this.X, this.Y);
        anim.loop = true;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
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
      for ( let i = 13; i >= 0; i-- ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .4;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
          this.animationState.five === '';
          this.animationState.four === 'start';

          const treshScene = document.querySelector('.scene-005');
          if ( treshScene ) {
            document.getElementById('main-scene').removeChild(treshScene);
          }
        };

        this.app.stage.addChild(anim);
      }
    },
  },
  watch: {
    'animationState.five': function() {
      if ( this.animationState.five === 'create' ) {
        this.createScene();
      }
    },
    scroll() {
      if ( this.animationState.five === 'down' ) {
        const treshScene = document.querySelector('.scene-004');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
        this.sheet_neon.parse(() => {
          this.onAssetsLoadedNext();
        }) 
      }
      if ( this.animationState.five === 'up' ) {
        this.sheet_neon.parse(() => {
          this.onAssetsLoadedUp();
        })
      }
      if ( this.animationState.five === 'start' ) {
        this.createScene();
        setTimeout(() => {
          this.sheet_neon.parse(() => {
            this.onAssetsLoadedRepeat();
          })
        }, 350)
      }
    }
  }
}
</script>