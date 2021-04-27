<template>
  <section class="mobile-scene-2">
    <!-- <img v-if="!this.startAnimation" 
      class="img_static"
      :src="require('@/assets/img/sprites/scene_02/mobile/pshick_static-min.png')"
      height="400"
      alt=""> -->
  </section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenTwo',
  props: { offset: Number },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_zilch: require('@/assets/img/sprites/scene_02/mobile/m-pshick.json'),
    sprite_img: require('@/assets/img/sprites/scene_02/mobile/m-pshick.png'),
    static_img: require('@/assets/img/sprites/scene_02/mobile/pshick_static-min.png'),
    sheet_zilch: '',

    complite: false,
    startAnimation: false,
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
    sceneOffset: function() {
      const scene = document.querySelector('.mobile-scene-2');
      return scene.getBoundingClientRect().top;
    },
    k: function() {
      if ( this.height < 640 ) {
        return 2
      } else if ( this.height < 700 ) {
        return 2.7
      } else if ( this.height < 780 ) {
        return 3.3
      } else {
        return 4
      }
    }
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

            this.app.ticker.start();
            this.onAssetsLoadedStart();
          })
      } else {
        self.app.loader
          .add('image_zilch', this.json_zilch)
          .load((loader, resources) => {
            const zilch = new this.$PIXI.Texture.from(this.sprite_img);
            self.sheet_zilch  = new this.$PIXI.Spritesheet(zilch, this.json_zilch);

            this.app.ticker.start();
            this.onAssetsLoadedStart();
          })
      }
    },
    onAssetsLoadedStart() {
      let frames = [];

      frames.push(this.$PIXI.Texture.from(this.static_img));
      const anim = new this.$PIXI.AnimatedSprite(frames);

      anim.x = this.app.screen.width / 3;
      anim.y = this.app.screen.height / 2;
      anim.anchor.set(.5);
      anim.animationSpeed = .12;
      anim.scale.set(.3, .3);
      anim.loop = true;
      anim.play();
      anim.filters = [new this.$PIXI.filters.FXAAFilter()]
      anim.onComplete = () => {
        this.app.ticker.stop();
      };
      this.app.stage.addChild(anim);
    },

    onAssetsLoadedNext() {
      let frames = [];

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      };

      for ( let i = 9; i <= 29; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`pshick_${val}-min.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);

        anim.x = this.app.screen.width / 3;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .12;
        anim.scale.set(.3, .3);
        anim.loop = false;
        anim.play();
        anim.onComplete = () => {
          this.complite = true;
          
          const childLength = this.app.stage.children.length;
          if ( this.app.stage ) {
            for (let i = childLength - 1; i >= 0; i--) {	
              this.app.stage.removeChild(this.app.stage.children[i]);
            };
          };
          this.onAssetsLoadedStart();
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
        this.sheet_zilch.parse(() => {
          this.onAssetsLoadedNext();
        })
      }
    }
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
.mobile-scene-2 {
  position: relative;
}
.img_static {
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  height: 100%;
}
</style>
