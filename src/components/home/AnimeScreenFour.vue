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
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_lines:   require('@/assets/img/sprites/scene_04/lines-2.json'),
    sprite_lines: require('@/assets/img/sprites/scene_04/lines-2.webp'),
    json_flackon:   require('@/assets/img/sprites/scene_04/flackon-4.json'),
    sprite_flackon: require('@/assets/img/sprites/scene_04/flackon-4.webp'),
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
  mounted() {
    this.createScene();
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('.sequence-4');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_lines', this.json_lines)
        .add('image_flackon', this.json_flackon)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
          
          const lines = new this.$PIXI.Texture.from(this.sprite_lines);
          const sheet_lines  = new this.$PIXI.Spritesheet(lines, this.json_lines);
          const flackon = new this.$PIXI.Texture.from(this.sprite_flackon);
          const sheet_flackon  = new this.$PIXI.Spritesheet(flackon, this.json_flackon);

          if ( loader.progress === 100 ) {
            sheet_lines.parse(() => {
              this.onAssetsLoadedNext();
            })
            sheet_flackon.parse(() => {
              this.onAssetsLoadedFlackon();
            })
          }
        })
    },
    onAssetsLoadedNext() {
      const blurFilter = new this.$PIXI.filters.BlurFilter();
      blurFilter.blurX = 20;
      blurFilter.blurY = 8;
      blurFilter.repeatEdgePixels = true;

      let frames = [];
      for ( let i = 0; i <= 29; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`lines_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .1;
        anim.scale.set(this.X, .8);
        anim.filters = [blurFilter];
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedFlackon() {
      let frames = [];
      for ( let i = 0; i <= 19; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`flackon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        // anim.scale.set(this.X, this.Y);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
  },
  watch: {
    scroll() {;
    // const childLength = this.app.stage.children.length;
    //   if ( this.app.stage ) {
    //     for (let i = childLength - 1; i >= 0; i--) 
    //       {	this.app.stage.removeChild(this.app.stage.children[i]);
    //     };
    //   };
      if ( this.scroll === 3 ) {
        // this.onAssetsLoadedNext();
        this.onAssetsLoadedFlackon();
      }
    }
  }
}
</script>
