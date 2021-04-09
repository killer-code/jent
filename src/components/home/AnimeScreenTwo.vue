<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-2"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenTwo',
  props: {
    scroll: Number,
    animationState: Object,
    sprite_img: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_zilch:   require('@/assets/img/sprites/scene_02/pshick-1.json'),
    sheet_zilch: '',
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
    this.createScene()
  },
  methods: {
    async createScene() {
      const sequence = document.querySelector('#main-scene');
      const self = this; 

      self.app.view.classList.add('scene-002');
      sequence.appendChild(self.app.view);

      if ( self.app.loader.resources.image_zilch ) {
        self.app.loader
          .load((loader, resources) => {
            const zilch = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_zilch  = new this.$PIXI.Spritesheet(zilch, this.json_zilch);
          })
      } else {
        self.app.loader
          .add('image_zilch', this.json_zilch)
          .load((loader, resources) => {
            const zilch = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_zilch  = new this.$PIXI.Spritesheet(zilch, this.json_zilch);
          })
      }
    },
    onAssetsLoadedNext() {
      let frames = [];
      for ( let i = 0; i <= 29; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`pshick_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);

        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .12;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
          this.app.ticker.stop();
        };
        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedUp() {
      let frames = [];

      for ( let i = 9; i >= 0; i-- ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`pshick_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .12;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.animationState.one = 'start';
          this.$PIXI.utils.clearTextureCache();
          this.app.ticker.stop();
          const treshScene = document.querySelector('.scene-002');
          if ( treshScene ) {
            document.getElementById('main-scene').removeChild(treshScene);
          }
        };
        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedStatic() {
      let frames = [];
      frames.push(this.$PIXI.Texture.from(`pshick_29-min.png`));
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
        this.app.ticker.stop();
      };
      this.app.stage.addChild(anim)
    }
  },
  watch: {
    async scroll() {
      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      
      if ( this.scroll === 1 && this.animationState.two === 'down' ) {
        this.createScene();
        this.app.ticker.start();
        this.sheet_zilch.parse(() => {
          this.onAssetsLoadedNext();
        })

        const treshScene = document.querySelector('.scene-001');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
      }

      if ( this.scroll === 0 && this.animationState.two === 'up' ) {
        this.createScene();
        this.app.ticker.start();
        this.sheet_zilch.parse(() => {
          this.onAssetsLoadedUp();
        })
      }
      if ( this.scroll === 1 && this.animationState.two === 'start' ) {
        this.createScene()
        this.app.ticker.start();

        const treshScene = document.querySelector('.scene-003');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }

        this.sheet_zilch.parse(() => {
          this.onAssetsLoadedStatic();
        })
        
      }
    }
  }
}
</script>