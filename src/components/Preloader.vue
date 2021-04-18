<template>
  <section class="preloader-modal">
    <section class="parx-scene">
        <img class="parallax-img"
          :data-depth="isMobile ? 0.5 : 0.1"
          :src="require('@/assets/img/preloader-2-2-min.png')" 
          alt="">

        <img class="parallax-img"
          :data-depth="isMobile ? 0.7 : 0.15"
          :src="require('@/assets/img/preloader-1-2-min.png')" 
          alt="">
      </section>
    <section class="preloader">
      <BarLoader color="#ffffff" />
      <p class="preloader__txt preloader__txt_anim">Загрузка</p>
    </section>
  </section>
</template>

<script>
import { BarLoader } from '@saeris/vue-spinners'

export default {
  name: 'Preloader',
  components: { BarLoader },
  props: { loaded: Boolean },
  data: () => ({
    isMobile: window.innerWidth < 561,
  }),
  mounted() {
    const scene = document.querySelector('.parx-scene');
    const parallaxInstance = new this.$parallax(scene);
  }
}
</script>

<style lang="scss" scoped>
body * { pointer-events: none; }
.preloader-modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 1);

  @media ( orientation: portrait ) {
      justify-content: center;
  }
}
.preloader {
  width: fit-content;
  margin: 10px auto;

  &__txt {
    text-align: center;
    width: 100%;
    &_anim {
      animation: loading 2s ease infinite;
    }
  }
}

@keyframes loading {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}

.parx-scene {
  @media screen and (max-width: 560px) {
    height: 400px;
  }
}
.parallax-img {
  height: 90vh;
  object-fit: contain;
  @media screen and (max-width: 560px) {
    height: 400px;
    object-fit: cover;
  }
}
</style>
