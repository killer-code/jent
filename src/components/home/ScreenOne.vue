<template>
  <section class="screen-one">
    <div class="container">
      <section class="scene-static">
        <img class="img-jent_static" 
          data-depth-x="0.2" data-depth-y="0.1"
          src="@/assets/img/jent-static.png">
      </section>

      <button class="btn_mob">
        <img src="@/assets/img/cross.svg" alt="">
      </button>

      <section class="content page-1-content">
        <div class="start">
          <h2 class="caption-2">Джент.<br class="mb_d-none">
            <strong class="caption-2 caption-2_gradient">
              Быстрее ваших<br class="mb_d-none">
            </strong>
            <strong class="caption-2 caption-2_gradient">
               желаний
            </strong>
          </h2>

          <div class="txt _mt-7">
            <p>
              Джент — это инновационное средство для усиления
              <br class="mb_d-none">
              потенции в удобном формате спрея для приема
              <br class="mb_d-none">
              внутрь. Джент воздействует на естественные 
              <br class="mb_d-none">
              механизмы возникновения эрекции и начинает
              <br class="mb_d-none">
              действовать уже через 10 минут.
            </p>
          </div>
        </div>

        <section class="mb_d-none">
          <div class="end _mb-7">
            <Timer />
            <div class="right_txt">
              <p class="txt txt_left">Стабильная эрекция</p>
              <p class="txt txt_left">уже через 10 мин</p>

              <div @click="openAside" 
                  data-key="oneSecond"
                  class="txt_left wrap_more wrap_more_left">
                <p class="more">Подробнее</p>
                <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
              </div>
            </div>
          </div>

          <div class="_mb-7 _mt-60">
            <p class="txt txt_left">Инновационный</p>
            <p class="txt txt_left">формат 
              <strong class="txt txt_strong">спрея</strong>
            </p>

            <div @click="openAside" 
                data-key="oneFirst" 
                class="txt_left wrap_more wrap_more_left">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </div>
          </div>
        </section>

      </section>
    </div>
    <!-- <div class="grad"></div> -->
  </section>
</template>

<script>
import Parallax from 'parallax-js'
import Timer from '@/components/Timer'

export default {
  name: 'ScreenOne',
  components: { Timer },
  props: ['asideData', 'getAsideData'],
  methods: {
    openAside(e) {
      const btnKey = e.target.parentElement.dataset.key;
      const asideData = this.getAsideData[btnKey];

      this.asideData.description = asideData.description;
      this.asideData.link = asideData.link;
      this.asideData.title = asideData.title;
      this.asideData.isOpen = true;
    },
  },
  mounted() {
    // Delete sprite
    const sceneSt = document.querySelector('.scene-static');
    let parallaxInstance = new Parallax(sceneSt);
    // END
  }
}
</script>

<style lang="scss" scoped>
.grad {
  position: absolute;
  height: 550px;
  top: calc(100vh - 450px);
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
}
.screen-one {
  position: relative;
  height: 100vh;
  width: 100vw;

  // -webkit-box-shadow: inset 0px -22px 32px -2px rgba(79, 70, 92, 0.1);
  // -moz-box-shadow:    inset 0px -22px 32px -2px rgba(79, 70, 92, 0.1);
  // box-shadow:         inset 0px -22px 32px -2px rgba(79, 70, 92, 0.1);
}
.scene-static {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media screen and (max-width: 768px) {
    left: 20%;
  }
  @media screen and (max-width: 560px) {
    left: 0;
    top: -15vh;
  }
}
.content {
  display: flex;
  align-items: space-between;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;
}
.page-1-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and ( max-width: 560px ) {
    justify-content: flex-end;
    padding-bottom: 70px;
  }
}
.content > div { display: flex; }
.start { 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  width: fit-content; 

  & .caption-2 {
    @media screen and (max-width: 560px) {
      font-weight: 400;
      width: fit-content;
    }
  }
}
.txt {
  @media screen and (max-width: 1280px) {
    font-size: 21px;
    line-height: 27px;
  }

  & p {
    font-weight: 300;
    font-size: 21px;
    line-height: 34px;
    letter-spacing: 0.004em;

    @media screen and (max-width: 1280px) {
      font-size: 16px;
      line-height: 26px;
    }
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
  object-fit: contain;

  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
  @media screen and ( max-width: 560px ) {
    object-fit: contain;
    min-width: 680px; 
  }
}
.wrap_more {
  margin-top: 20px;
}
._mt-7 {
  margin-top: 35px;
  @media screen and ( max-width: 560px ) { margin-top: 16px; }
}
._mt-60 {
  margin-top: 60px;
}
.tb_d-none {
  @media screen and (max-width: 1280px) {
    display: none;
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
.btn_mob {
  position: absolute;
  top: calc(50% - 14.5px);
  right: 80px;
  display: none;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: #f36d01;
  cursor: pointer;

  &:focus { outline: none; }
  @media screen and (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;

    &::before {
      content: '';
      position: absolute;
      background: rgba(255,255,255,.1);
      animation: btn-mob-anim 1s ease infinite alternate;
      width: 0px;
      height: 0px;
      border-radius: 50%; 
      z-index: -1;
    }
  }
}
p, h2 {
  @media screen and (max-width: 560px) {
    text-align: center !important;
  }
}

@keyframes btn-mob-anim {
  0% { 
    width: 0px;
    height: 0px;  
  }
  100% { 
    width: 52px;
    height: 52px;
  }
}
</style>
