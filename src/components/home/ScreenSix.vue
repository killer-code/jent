<template>
  <section class="screen-six">
    <div class="container">
      
      <section class="scene-6-static">
        <img class="img-jent_static-1" 
          data-depth-x="-0.05" data-depth-y="-0.05"
          src="@/assets/img/bg-s6-12.png">
      </section>

      <section class="content page-1-content">
        <h2 class="caption-2">Попробуйте Джент</h2>

        <div class="_mt-7">
          <p class="txt txt_left">
            Оформите заказ, чтобы получить флакон нового Джент
            <br class="mb_d-none">
            совершенно бесплатно. Оплатите заказ в ближайшей  
            <br class="mb_d-none">
            аптеке, получите специальный код и введите его
            <br class="mb_d-none">
            на странице «Возврат средств». Деньги поступят
            <br class="mb_d-none">
            на счёт вашего телефона в течение нескольких часов.
          </p>
        </div>

        <div class="app-row _mt-7">
          <button class="app-btn app-btn_orange"
            @click="$router.push('/order')">
            Заказать
          </button>
          <button class="app-btn app-btn_white _ml-7"
            @click="$router.push('/moneyback')">
            Возврат средств
          </button>
        </div>

        <section class="txt_small_wrap">
          <p class="txt_small">
            * ООО «Фармамед» не несет ответственности за действия 
            пользователей настоящего сайта.
          </p>

          <p class="txt_small">
            Функционал Сайта предоставляется ООО «Фармамед» только 
            для специалистов здравоохранения (медицинских работников 
            и руководителей медицинских организаций). Если Вы не 
            относитесь к данной категории лиц, просим прекратить 
            использование Сайта, в противном случае на Вас возлагается 
            вся ответственность действующего законодательства за 
            последствия нарушения данного правила
          </p>

          <p class="txt_small">
            ** используя настоящий Cайт вы обязуетесь, в случае 
            приобретения/получения любого продукта посредством 
            Cайта, использовать его только для личных целей и не 
            вручать пациентам
          </p>
        </section>
      </section>

    </div>

    <!-- <StaticFooter class="footer" /> -->
  </section>
</template>

<script>
import Parallax from 'parallax-js'
import StaticFooter from '@/components/StaticFooter'

export default {
  name: 'ScreenSix',
  components: { StaticFooter },
  mounted() {
    // Delete sprite
    const sceneSt = document.querySelector('.scene-6-static');
    let parallaxInstance = new Parallax(sceneSt);
    // END
  }
}
</script>

<style lang="scss" scoped>
.screen-six {
  position: relative;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 560px) {
    background: rgba(0,0,0,.4);
    background-image: url('../../assets/img/bg-s6-mob.png');
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: top center;

    height: auto;
  }
}
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}
.scene-6-static {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.content {
  margin: 0 auto;
  max-width: 1920px;
}
.page-1-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    padding-top: 55vh;
    padding-bottom: 15vh;
  }
}
.start { 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  width: fit-content; 
}
.txt {
  @media screen and (max-width: 1280px) {
    font-size: 21px;
    line-height: 27px;
  }

  font-weight: 300;
  font-size: 21px;
  line-height: 34px;
  letter-spacing: 0.004em;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    line-height: 26px;
  }
}
.end { 
  display: flex; 
  justify-content: flex-end; 
  align-items: center; 
  width: fit-content;
  padding-top: 100px;
  
  @media screen and (max-width: 1280px) {
    padding-top: 70px;
    margin-right: 0;
  }
}
.img-jent_static {
  position: absolute;
  margin-top: 150px;
  object-fit: contain;

  &-1 { object-fit: cover; }

  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}
.img-jent_static-1 {
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}
.wrap_more {
  margin-top: 20px;
}
._mt-7 {
  margin-top: 35px;
  @media screen and (max-width: 560px) {
    margin-top: 5px;
  }
}
._ml-7 {
  margin-left: 35px;
  @media screen and (max-width: 560px) {
    margin-left: 0;
  }
}
._mt-60 {
  margin-top: 60px;
}
.app-row {
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 50%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
  & button {
    @media screen and (max-width: 768px) {
      margin: 10px 0 !important;
    }
  }
}
.app-btn {
  padding: 13px 73px;
  background: none;
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;

  &:focus { outline: none; }
  &_white  { border: 1px solid #fff; }
  &_orange { border: 1px solid #f36d01; }

  @media screen and (max-width: 560px) {
    padding: 10px 0;
    width: 100%;
    margin: 5px 0;
  }
}
.mb_d-none {
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}
.mb-d {
  display: none !important;
  @media screen and (max-width: 560px) {
    display: block !important;
  }
}


.txt_small_wrap {
  margin-top: 15vh;

  @media screen and (max-width: 1400px) {
    margin-top: 3vh;
  }
}
.txt_small {
  font-family: 'Roboto';
  max-width: 545px;
  font-weight: 300;
  font-size: 10px;
  line-height: 13px;
  color: #fff;
  margin-bottom: 13px;
  opacity: .5;
}
.footer {
  position: fixed;
  bottom: 20px;
  @media screen and ( max-width: 560px ) {
    position: absolute;
  }
}
</style>
