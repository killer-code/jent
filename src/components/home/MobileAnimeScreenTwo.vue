<template>
  <section class="mobile-scene-2"></section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenTwo',
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_zilch: require('@/assets/img/sprites/scene_02/mobile/m-pshick.json'),
    sprite_img: require('@/assets/img/sprites/scene_02/mobile/m-pshick.png'),
    sheet_zilch: '',
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width + 40,
        height: 380,
      });
    },
    X: function() { return this.width / 480 * 2; },
    Y: function() { return this.height / 270; },
  },
  methods: {
    async createScene() {
      const sequence = document.querySelector('.mobile-scene-2');
      const self = this; 

      self.app.view.classList.add('m-scene-002');
      sequence.appendChild(self.app.view);

      if ( self.app.loader.resources.image_zilch ) {
        self.app.loader
          .load((loader, resources) => {
            const zilch = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_zilch  = new this.$PIXI.Spritesheet(zilch, this.json_zilch);

            self.sheet_zilch.parse(() => {
              this.onAssetsLoadedNext();
            })
          })
      } else {
        self.app.loader
          .add('image_zilch', this.json_zilch)
          .load((loader, resources) => {
            const zilch = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_zilch  = new this.$PIXI.Spritesheet(zilch, this.json_zilch);

            self.sheet_zilch.parse(() => {
              this.onAssetsLoadedNext();
            })
          })
      }
    },
    onAssetsLoadedNext() {
      let frames = [];
      for ( let i = 9; i <= 29; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`pshick_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);

        anim.x = this.app.screen.width / 3;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .12;
        anim.scale.set(.3, .3);
        anim.loop = true;
        anim.play();
        // anim.onComplete = () => {
        //   this.$PIXI.utils.clearTextureCache();
        //   this.app.ticker.stop();
        //   this.scrollpage.api.setAllowScrolling(true);
        // };
        this.app.stage.addChild(anim);
      }
    },
  },
  mounted() {
    this.createScene();
  }
}
</script>

<style lang="scss">
.m-scene-002 {
  display: none;
  @media screen and ( max-width: 560px ) {
    display: block;
    margin-left: -11vw;
  }
}
</style>
