<template>
  <section class="mobile-scene-4"></section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenFour',
  data: () => ({
    width: window.innerWidth,
    height: 400,

    json_lines:   require('@/assets/img/sprites/scene_04/mobile/lines.json'),
    json_flackon: require('@/assets/img/sprites/scene_04/mobile/flackon.json'),
    sprite_img_line:    require('@/assets/img/sprites/scene_04/mobile/lines.webp'),
    sprite_img_flackon: require('@/assets/img/sprites/scene_04/mobile/flackon.png'),

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
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('.mobile-scene-4');
      const self = this; 

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
        anim.scale.set(.3, .2);
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
        anim.scale.set(.3, .3);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
  },
  mounted() {
    this.createScene();
  }
}
</script>

<style lang="scss" scoped>
.mobile-scene-4 {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
