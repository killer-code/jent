<template>
  <section class="disclaimer">
    <section class="disclaimer__content disclaimer__content_center">
      <img src="@/assets/img/logo_color.svg" class="disclaimer__img" alt="">
      <p>Информируем вас, что данный сайт... </p>
      <p>Нажимая кнопку «да», вы подтверждаете, что вам 18+ лет.</p>
      <button class="disclaimer__btn" @click="goSite">да</button>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Disclaimer',
  methods: {
    goSite() { 
      localStorage.old = true;
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style lang="scss" scoped>
.disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: url('../assets/img/back-dis.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }

  &__img {
    margin-bottom: 70px;
  }
  &__btn {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    background: none;
    margin-top: 55px;
    text-transform: uppercase;
    color: #fff;
    width: 178px;
    height: 58px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}
</style>
