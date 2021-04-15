<template>
  <section class="mobile-scene-5"></section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenFive',
  data: () => ({
    width: window.innerWidth,
    height: 400,
    json_neon: require('@/assets/img/sprites/scene_05/mobile/neon.json'),
    sprite_img: require('@/assets/img/sprites/scene_05/mobile/neon.webp'),
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
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('.mobile-scene-5');
      const self = this; 

      sequence.appendChild(self.app.view);
      if ( self.app.loader.resources.image_neon ) {
        self.app.loader
          .load((loader, resources) => {
            const neon = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);

            self.sheet_neon.parse(() => {
              this.onAssetsLoadedRepeat();
            })
          })
      } else {
        self.app.loader
          .add('image_neon', this.json_neon)
          .load((loader, resources) => {
            const neon = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);

            self.sheet_neon.parse(() => {
              this.onAssetsLoadedRepeat();
            })
          })
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
      for ( let i = 0; i <= 11; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .1;
        anim.scale.set(.3, .3);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
  },
  mounted() {
    this.createScene();
  },
}
</script>

<style lang="scss" scoped>
.mobile-scene-5 {
  margin-left: -15px;
}
</style>