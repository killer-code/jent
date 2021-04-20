<template>
  <section class="mobile-scene-5"></section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenFive',
  props: { offset: Number },
  data: () => ({
    width: window.innerWidth,
    height: 400,
    json_neon: require('@/assets/img/sprites/scene_05/mobile/new-neon.json'),
    sprite_img: require('@/assets/img/sprites/scene_05/mobile/new-neon.jpg'),
    sheet_neon: '',
    static_img: require('@/assets/img/sprites/scene_05/mobile/new-neon_static-min.jpg'),

    complite: false,
    startAnimation: false,
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
    sceneOffset: function() {
      const scene = document.querySelector('.mobile-scene-5');
      return scene.getBoundingClientRect().top;
    },
    k: function() {
      if ( this.height < 640 ) {
        return 2.4
      } else if ( this.height < 700 ) {
        return 2.9
      } else if ( this.height < 780 ) {
        return 3.3
      } else {
        return 4
      }
    }
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

            this.app.ticker.start();
            this.onAssetsLoadedStart();
          })
      } else {
        self.app.loader
          .add('image_neon', this.json_neon)
          .load((loader, resources) => {
            const neon = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);

            this.app.ticker.start();
            this.onAssetsLoadedStart();
          })
      }
    },
    onAssetsLoadedStart() {
      let frames = [];

      frames.push(this.$PIXI.Texture.from(this.static_img));
      const anim = new this.$PIXI.AnimatedSprite(frames);

      anim.x = this.app.screen.width / 2;
      anim.y = this.app.screen.height / 2;
      anim.anchor.set(.5);
      anim.animationSpeed = .12;
      anim.scale.set(.3, .3);
      anim.loop = false;
      anim.play();
      this.app.stage.addChild(anim);
    },
    onAssetsLoadedGo() {
      let frames = [];

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      for ( let i = 0; i <= 11; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon-old-${val}-min.jpg`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .15;
        anim.scale.set(.3, .3);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.app.ticker.stop();

        };

        this.app.stage.addChild(anim);
      }
    },
  },
  mounted() {
    this.createScene();
  },
  watch: {
    offset() {
      if ( ( this.sceneOffset - 100 * this.k < this.offset ) && !this.complite ) {
        this.startAnimation = true;
      }
    },
    startAnimation() {
      this.app.ticker.start();
      if ( this.startAnimation ) {
        this.sheet_neon.parse(() => {
          this.onAssetsLoadedGo();
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-scene-5 {
  margin-left: -15px;
}
</style>