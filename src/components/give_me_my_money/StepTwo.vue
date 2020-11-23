<template>
  <section class="wrapper">

    <section>
      <h2 class="card__title">
        Вы успешно оформили<br> 
        возврат средств
      </h2>
      <p class="card__subt">
        Деньги поступят на счёт вашего телефона<br> 
        в течение нескольких часов.
      </p> 

      <router-link to="/" class="card__link">
        Вернуться на глувную
      </router-link>
    </section>

  </section>
</template>

<script>
export default {
  name: 'StepTwo',
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
}
.card {
  &__title {
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    color: #fff;
    text-align: center;
  }
  &__subt {
    margin: 21px 0;
    text-align: center;
    color: #fff;
  }
  &__link {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: #f36d01;
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    opacity: 0.7;
    transition: all .3s ease;

    &:hover {
      opacity: 1;
    } 
  }
}
</style>
