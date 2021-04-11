<template>
  <section class="preloader-modal">
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
}
</script>

<style lang="scss" scoped>
body * { pointer-events: none; }
.preloader-modal {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 1);
}
.preloader {
  width: fit-content;
  margin: 0 auto;

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
</style>
