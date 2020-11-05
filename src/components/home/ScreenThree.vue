<template>
  <section class="screen-two">
    <div class="container">
      <transition>
        <h2 class="caption-2 caption-2_gradient">Активное<br>вещество</h2>
      </transition>
      
      <section class="content">
        <div>
          <p class="txt txt_left">В основе Джент – <strong class="txt txt_strong">молекула Силденафила</strong>,</p>
          <p class="txt txt_left">хорошо изученного и проверенного средства.</p>
          <p class="txt txt_left">Вещество давно зарекомендовало себя</p>
          <p class="txt txt_left">на рынке.</p>
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
  align-items: flex-end;
  flex-direction: column;
  padding: 100px 30px;
  max-width: 1400px;
  margin: 0 auto;
}

</style>
