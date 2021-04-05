<template>
  <section class="scene" 
    style="position: fixed;">
      <img class="smoke" :class="{ 'smoke_active': startSmoke }"
        :style="`left: calc(${cloudLeft}px - 50%)`"
        :src="require('@/assets/img/sprites/scene_03/cloud.png')" alt="">
      <img class="smoke molecula__img" :class="{ 'smoke_active': startMol }"
        :style="`left: calc(${cloudLeft}px - 50%)`"
        :src="require('@/assets/img/sprites/scene_03/nebula.png')" alt="">
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenThree',
  props: {
    scroll: Number,
    sprite_img: Image,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    sprite_star: require('@/assets/img/sprites/scene_03/star.png'),
    sheet_mol: '',
    startSmoke: false,
    startMol: false,
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
    Y: function() { return this.height / 980 }
  },
  mounted() {
    this.$PIXI.settings.ANISOTROPIC_LEVEL = 8;
    this.$PIXI.settings.TARGET_FPMS = 0.05;
  },
  methods: {
    createScene() {
      const mainScene = document.querySelector('#main-scene');

      if ( !document.querySelector('.scene-003') ) {
        mainScene.appendChild(document.createElement('div'))
          .classList.add('scene-003');
      }

      const sequence = document.querySelector('.scene-003');
    },
    onCreateSpace() {
      const self = this;
      const app = new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width,
        height: this.height,
      });

      document.querySelector('.scene-003').appendChild(app.view);

      let starAmount = 350;
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
      setTimeout(() => { warpSpeed = 0 }, 1500)

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
        this.createScene();
        const childLength = this.app.stage.children.length;
        if ( this.app.stage ) {
          for (let i = childLength - 1; i >= 0; i--) {	
            this.app.stage.removeChild(this.app.stage.children[i]);
          };
        };
        const otherTresh = document.querySelector('.scene-004');
        const treshScene = document.querySelector('.scene-002');
        if ( treshScene ) {
          document.getElementById('main-scene').removeChild(treshScene);
        }
        if ( otherTresh ) {
          document.getElementById('main-scene').removeChild(otherTresh);
        }

        this.onCreateSpace();
        setTimeout(() => { this.startSmoke = true }, 1700);
        setTimeout(() => { this.startMol = true }, 2000)
      } 
      if ( this.scroll === 3 || this.scroll === 1 ){
        this.startSmoke = false;
        this.startMol = false;
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
  transition: all 1s ease;

  &_active { opacity: .5; }
}

.molecula__img {
  filter: contrast(1.5);
}
</style>