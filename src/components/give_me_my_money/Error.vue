<template>
  <section class="wrapper">

    <section>
      <h2 class="card__title">Ошибка</h2>

      <router-link to="/" class="card__link">
        Вернуться на глувную
      </router-link>
    </section>

    <div class="small_wrap">
      <p class="small">Возникли проблемы?</p>
      <p class="small">
        тел.
        <a href="tel:+78126470246" class="link">8 (812) 647-02-46</a>,
        <a href="mailto:info@jent.men" class="link">info@jent.men</a>
      </p>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20vh;
}
.card {
  &__title {
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    color: #fff;
    text-align: center;
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

    &:hover { opacity: 1; } 
  }
}

.small {
  text-align: center;
  font-size: 14px;
  color: rgba(255,255,255,.5);
  &_wrap { margin-top: 32px; }
}
.link {
  color: #f36d01;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  opacity: .7;
  transition: all .3s ease;

  &:hover { opacity: 1; } 
}
</style>
