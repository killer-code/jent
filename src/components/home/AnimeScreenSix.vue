<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-6"></div>
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
      self.app.view.setAttribute('data-depth', '0.1');

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
          this.$PIXI.utils.clearTextureCache();
          const scene = document.getElementById('main-scene');
          let parallaxInstance = new this.$parallax(scene);
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
          this.$PIXI.utils.clearTextureCache();
          this.animationState.five === 'start';
          this.animationState.six === '';

          const treshScene = document.querySelector('.scene-006');
          if ( treshScene ) {
            document.getElementById('main-scene').removeChild(treshScene);
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
      if ( this.animationState.six === 'up' ) {
        this.sheet_back.parse(() => {
          this.onAssetsLoadedUp();
        })
      }
    },
  }
}
</script>