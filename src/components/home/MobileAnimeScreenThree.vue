<template>
  <section class="mobile-scene-3">

    <div class="bac" 
      :class="{'bac_active': startSmoke}"></div>

    <div class="wrapper-img">
      <img class="molecula molecula__img" :class="{ 'molecula_active': startMol }"
        data-depth="0.1"
        :src="require('@/assets/img/sprites/scene_03/nebula-min.svg')" alt="">
    </div>

  </section>
</template>

<script>
export default {
  name: 'MobileAnimeScreenThree',
  props: { offset: Number },
  data: () => ({
    sprite_star: require('@/assets/img/sprites/scene_03/star.png'),
    startSmoke: false,
    startMol: false,
    width: window.innerWidth,
    height: window.innerHeight,

    warpSpeed: 0,
    isJump: false,
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width,
        height: 400,
      });
    },

    starTexture: function() {
      return this.$PIXI.Texture.from(this.sprite_star);
    },

    sceneOffset: function() {
      const scene = document.querySelector('.mobile-scene-3');
      return scene.getBoundingClientRect().top;
    },
    k: function() {
      if ( this.height < 640 ) {
        return 1
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
    onCreateSpace() {
      const self = this;

      document.querySelector('.mobile-scene-3').appendChild(self.app.view);

      let starAmount = 250;
      let cameraZ = 0;
      let fov = 20;
      let baseSpeed = 0.025;
      let speed = 0;
      let starStretch = 5;
      let starBaseSize = 0.2;

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
          self.app.stage.addChild(star.sprite);
          stars.push(star);
      }

      // self.warpSpeed = 1;

      self.app.ticker.add(function(delta) {
          speed += (self.warpSpeed - speed) / 20;
          cameraZ += delta * 10 * (speed + baseSpeed);
          for (let i = 0; i < starAmount; i++) {
              let star = stars[i];
              if (star.z < cameraZ) randomizeStar(star);
              let z = star.z - cameraZ;
              star.sprite.x = star.x * (fov / z) * self.app.renderer.screen.width + self.app.renderer.screen.width / 2;
              star.sprite.y = star.y * (fov / z) * self.app.renderer.screen.width + self.app.renderer.screen.height / 2;

              let dxCenter = star.sprite.x - self.app.renderer.screen.width / 2;
              let dyCenter = star.sprite.y - self.app.renderer.screen.height / 2;
              let distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter + dyCenter);
              let distanceScale = Math.max(0, (2000 - z) / 2000);
              star.sprite.scale.x = distanceScale * starBaseSize;

              star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / self.app.renderer.screen.width;
              star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
          }
      })
    },
  },
  mounted() {
    this.onCreateSpace();
  },
  watch: {
    offset() {
      if ( ( this.sceneOffset - 100 * this.k < this.offset ) && !this.isJump ) {
        this.isJump = true;
        this.warpSpeed = 1;

        setTimeout(() => { 
          this.warpSpeed = 0;
        }, 1500)

        setTimeout(() => {
          this.startSmoke = true;
          this.startMol = true;
        }, 1700)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.mobile-scene-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: -15px;
  margin-bottom: -40px;

  & > canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.wrapper-img {
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  width: 100vw;
  height: auto;

  @media ( orientation: portrait ) {
    @media screen and ( max-width: 768px ) {
      align-items: flex-start;
      justify-content: center;
      padding: 0;
    }
  }
  @media screen and ( max-width: 560px ) {
    filter: contrast(5.5);
    z-index: 1000;
  }
  
}

.molecula {
  opacity: 0;
  transition: all 1s ease;

  &_active { opacity: 1; }

  @media ( orientation: portrait ) {
    @media screen and ( max-width: 768px ) {
      margin-right: 0;
      width: 90%;
    }
  }
}

.bac {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #0A0B11;
  background-image: url('~@/assets/img/sprites/scene_03/mobile/space.jpg');
  background-repeat: no-repeat;
  background-position: center;
  z-index: -10;
  background-size: 0%;
  background-blend-mode: lighten;
  
  &_active {
    animation-name: space;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(.67,.27,.69,1.1);
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;

    @media ( orientation: portrait ) {
      @media screen and ( max-width: 768px ) {
         animation-name: space-vert;
         background-position: center 50px;
      }
    }
  }
}

@keyframes space {
  from { background-size: 0% 0%; }
  to {  background-size: 100% 100%; }
}
@keyframes space-vert {
  from { background-size: 0% 0%; }
  to {  background-size: 100% 50%; }
}
</style>
