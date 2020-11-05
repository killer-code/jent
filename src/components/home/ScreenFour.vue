<template>
  <section class="screen-two">
    <div class="container">
      <transition>
        <h2 class="caption-2 caption-2_gradient">Действует<br>быстро</h2>
      </transition>
      
      <section class="content">
        <div>
          <p class="txt txt_left">Препарат всасывается через</strong>,</p>
          <p class="txt txt_left">слизистую оболочку полости рта</p>

          <router-link to="#"  class="txt_left wrap_more wrap_more_left">
            <p class="more">Подробнее</p>
            <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
          </router-link>
        </div>
      </section>

    </div>
  </section>
</template>

<script>

export default {
  name: 'ScreenThree',
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
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}

</style>
