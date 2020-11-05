<template>
  <section class="screen-two">
    <div class="container">
      <div id="canvas"></div>
      <transition>
        <h2 class="caption-2 caption-2_gradient">Удобная<br>дозировка</h2>
      </transition>
      
      <section class="content">
        <div>
          <div>
            <p class="txt txt_left"><strong class="txt txt_strong">Два нажатия</strong> достаточно</p>
            <p class="txt txt_left">для получения мощной</p>
            <p class="txt txt_left">эрекции.</p>
            
            <router-link to="#"  class="wrap_more wrap_more_left">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </router-link>
          </div>
        </div>

        <div>
          <div>
            <p class="txt txt_left">Гибкая форма дозировки</p>
            <p class="txt txt_left">снижает вероятность</p>
            <p class="txt txt_left">побочных эффектов</p>
            <p class="txt txt_left">к минимуму.</p>

            <router-link to="#"  class="wrap_more wrap_more_left">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </router-link>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>

export default {
  name: 'ScreenTwo',
  data: () => ({
  }),
  methods: {
  },
  created() {
    
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.screen-two {
  height: 100vh;
  width: 100vw;
}
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}
.content > div {
  margin-right: 40px;
}

</style>
