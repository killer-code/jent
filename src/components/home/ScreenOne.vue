<template>
  <section class="screen-one">
    <div class="container">
      <transition>
        <h2 class="caption-2 caption-2_gradient">КОМПАКТНЫЙ</h2>
      </transition>
      
      <section class="content">
        <div>
          <div class="right_txt">
            <p class="txt txt_right">Инновационный</p>
            <p class="txt txt_right">формат <strong class="txt txt_strong">мини-спрея</strong></p>

            <router-link to="#"  class="txt_right wrap_more">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </router-link>
          </div>
        </div>

        <div class="row"></div>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ScreenOne',
}
</script>

<style scoped>
.screen-one {
  height: 100vh;
  width: 100vw;
  background: radial-gradient(65.49% 75.6% at 100% 0%, #F04116 18.41%, rgba(240, 65, 22, 0) 100%);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
}

</style>
