<template>
  <section class="scene" 
    style="position: fixed;">
      <img class="smoke" :class="{ 'smoke_active': startSmoke }"
        :style="`left: calc(${cloudLeft}px - 50%)`"
        :src="require('@/assets/img/sprites/scene_03/smoke-min-10.webp')" alt="">
      <div class="canvas sequence-3" style="position: absolute; left: 0; top: 0;"></div>
      <div class="canvas sequence-3_star" style="position: absolute; left: 0; top: 0;"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenThree',
  props: {
    scroll: Number,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_mol:    require('@/assets/img/sprites/scene_03/molecula-2.json'),
    sprite_mol:  require('@/assets/img/sprites/scene_03/molecula-2.webp'),
    sprite_star: require('@/assets/img/sprites/scene_03/star.png'),

    startSmoke: false,
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

    starTexture: function() {
      return this.$PIXI.Texture.from(this.sprite_star);
    },
    cloudLeft: function() { return this.app.screen.width / 1.5 },
    cloudTop: function() { return this.app.screen.height / 2 },
    X: function() { return this.width / 1920 },
    Y: function() { return this.height / 1080 }
  },
  mounted() {},
  methods: {
    createScene() {
      const sequence = document.querySelector('.sequence-3');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_mol', this.json_mol)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
          
          const mol = new this.$PIXI.Texture.from(this.sprite_mol);
          const sheet_mol  = new this.$PIXI.Spritesheet(mol, this.json_mol);

          if ( loader.progress === 100 ) {
            sheet_mol.parse(() => {
              this.onAssetsLoadedNext();
            })
          }
        })
    },
    onAssetsLoadedNext() {
      let frames = [];
      for ( let i = 0; i <= 16; i++ ) {
        const val = i;
        const blurFilter = new this.$PIXI.filters.BlurFilter();
        blurFilter.blurX = .5;
        blurFilter.blurY = .5;
        blurFilter.repeatEdgePixels = true;

        frames.push(this.$PIXI.Texture.from(`molecula_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 1.5;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .5;
        anim.filters = [blurFilter];
        anim.scale.set(this.X, 1);
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    onCreateSpace() {
      const self = this;
      const app = new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width,
        height: this.height,
      });

      document.body.querySelector('.sequence-3_star').appendChild(app.view);

      let starAmount = 500;
      let cameraZ = 0;
      let fov = 20;
      let baseSpeed = 0.025;
      let speed = 0;
      let warpSpeed = 0;
      let starStretch = 5;
      let starBaseSize = 0.05;

      let stars = [];

      function randomizeStar(star, initial) {
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;

        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
      };

      for (let i = 0; i < starAmount; i++) {
          let star = {
              sprite: new this.$PIXI.Sprite(this.starTexture),
              z: 0,
              x: 0,
              y: 0
          };
          star.sprite.anchor.x = 0.5;
          star.sprite.anchor.y = 0.7;
          randomizeStar(star, true);
          app.stage.addChild(star.sprite);
          stars.push(star);
      }

      warpSpeed = 1;
      setTimeout(() => { warpSpeed = 0 }, 2000)

      app.ticker.add(function(delta) {
          speed += (warpSpeed - speed) / 20;
          cameraZ += delta * 10 * (speed + baseSpeed);
          for (let i = 0; i < starAmount; i++) {
              let star = stars[i];
              if (star.z < cameraZ) randomizeStar(star);
              let z = star.z - cameraZ;
              star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
              star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

              let dxCenter = star.sprite.x - app.renderer.screen.width / 2;
              let dyCenter = star.sprite.y - app.renderer.screen.height / 2;
              let distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter + dyCenter);
              let distanceScale = Math.max(0, (2000 - z) / 2000);
              star.sprite.scale.x = distanceScale * starBaseSize;

              star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
              star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
          }
      })
    },
  },
  watch: {
    scroll() {
      if ( this.scroll === 2 ) {
        const childLength = this.app.stage.children.length;
        if ( this.app.stage ) {
          for (let i = childLength - 1; i >= 0; i--) {	
            this.app.stage.removeChild(this.app.stage.children[i]);
          };
        };
        this.onCreateSpace();
        setTimeout(() => { this.startSmoke = true }, 1700);
        setTimeout(() => this.createScene(), 1500);
      }
    }
  }
}
</script>

<style lang="scss">
.scene {
  position: fixed;
  display: flex;
  align-items: center;
}
.smoke {
  opacity: 0;
  position: absolute;
  transition: all .3s ease;

  &_active { opacity: .5; }
}
</style>