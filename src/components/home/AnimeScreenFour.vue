<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-4_lines" style="position: absolute; left: 0; top: 0;"></div>
      <div class="canvas sequence-4" style="position: absolute; left: 0; top: 0;"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenFour',
  props: {
    scroll: Number,
    animationState: Object,
    sprite_img_line: Image,
    sprite_img_flackon: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_lines:   require('@/assets/img/sprites/scene_04/lines.json'),
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
    X: function() { return this.width / 1920 },
    Y: function() { return this.height / 1080 }
  },
  mounted() {},
  methods: {
    createScene() {
      const sequence = document.querySelector('#main-scene');
      const self = this; 

      self.app.view.classList.add('scene-004');
      sequence.appendChild(self.app.view);
      if ( self.app.loader.resources.image_lines && self.app.loader.resources.image_flackon ) {
        self.app.loader
          .load((loader, resources) => {
            const lines = new this.$PIXI.Texture.from(this.sprite_img_line);
            self.sheet_lines  = new this.$PIXI.Spritesheet(lines, this.json_lines);
            const flackon = new this.$PIXI.Texture.from(this.sprite_img_flackon);
            self.sheet_flackon  = new this.$PIXI.Spritesheet(flackon, this.json_flackon);
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
        anim.animationSpeed = .1;
        anim.scale.set(this.X, .8);
        anim.loop = false;
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
        anim.animationSpeed = .2;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.$PIXI.utils.clearTextureCache();
        };

        this.app.stage.addChild(anim);
      }
    },
  },
  watch: {
    'animationState.four': function() {
      if ( this.animationState.four === 'start' ) {
        this.createScene();
        this.app.ticker.start();

        const childLength = this.app.stage.children.length;
        if ( this.app.stage ) {
          for (let i = childLength - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        };

        const treshScene = document.querySelector('.scene-003');
        const mainScene = document.getElementById('main-scene');
        if ( treshScene ) {
          mainScene.removeChild(treshScene)
        }

        setTimeout(() => {
          this.sheet_lines.parse(() => {
            this.onAssetsLoadedNext();
          })
          this.sheet_flackon.parse(() => {
            this.onAssetsLoadedFlackon();
          })
        }, 150)

        setTimeout(() => {
          this.animationState.five = 'create'
        }, 1500)
      }
    },
    scroll() {;
      if ( this.scroll === 2 ) {
        this.app.ticker.stop();
        const treshScene = document.querySelector('.scene-004');
        const mainScene = document.getElementById('main-scene');
        if ( treshScene ) {
          mainScene.removeChild(treshScene)
        }
      }

      if ( this.scroll === 4 ) {
        this.app.ticker.stop();
      }
    }
  }
}
</script>
