<template>
  <section class="step-4">
    <h2 class="title">Джент уже в пути</h2>

    <section class="row_icon">
      <div class="icon">
        <img src="@/assets/img/mes-icon.svg" alt="">
        <p>Дождитесь СМС <br> от apteka.ru</p>
      </div>

      <div class="icon">
        <img src="@/assets/img/geo-icon.svg" alt="">
        <p>Придите в выбранную<br> в заказе аптеку</p>
      </div>

      <div class="icon">
        <img src="@/assets/img/rub-icon.svg" alt="">
        <p>Оплатите заказ</p>
      </div>

      <div class="icon">
        <img src="@/assets/img/cart-icon.svg" alt="">
        <p>Заберите заказ</p>
      </div>
    </section>

    <section class="txt">
      <p>
        Статус вашего заказа можно посмотреть в личном кабинете 
        <a href="https://apteka.ru/" 
          target="_blank" class="link"
          rel="noopener noreferrer">Apteka.ru</a> 
      </p>
    </section>
  </section>
</template>

<script>
export default {
  name: 'StepFour',
}
</script>

<style lang="scss" scoped>
.row_icon {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 120px;
}
.step-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}
.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;
  color: #fff;
}
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & img {
    margin-bottom: 32px;
  }
}
.txt {
  text-align: center;
  font-weight: 300;
  font-size: 21px;
  margin-top: 130px;
}
.link {
  color: #F36D01;
  transition: all .3s ease;
  &:hover { text-decoration: underline; }
}
</style>
