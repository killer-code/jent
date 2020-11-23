<template>
  <section class="screen-two">
    <div class="container">
      <div id="canvas"></div>

      <!-- <img class="img-jent_static" 
        src="@/assets/img/bg-s2-1.png"> -->

      <!-- <img class="img-jent_static" 
        src="@/assets/img/bg-s2-2.png"> -->
      <button class="btn_mob">
        <img src="@/assets/img/cross.svg" alt="">
      </button>
      
      <section class="content page-1-content">
        <h2 class="caption-2">
          Меньше побочных<br class="mb_d-none"> 
          эффектов
        </h2>
        <div class="_mt-7">
          <div class="">
            <p class="txt txt_left">
              В одном нажатии содержится 12,5 мг действующего
              <br class="mb_d-none"> 
              вещества, что позволяет подобрать индивидуальную 
              <br class="mb_d-none"> 
              дозировку. Минимальная доза — два нажатия (25 мг).
            </p>
          </div>
        </div>

        <div class="block-2 mb_d-none _mt-7">
          <div class="circle">
            <p class="timer__txt">2x</p>
          </div>

          <div class="block-2_txt_wrap">
            <p class="txt txt_left">
              <strong class="txt txt_strong">
                Два нажатия
              </strong> 
              достаточно
            </p>
            <p class="txt txt_left">для получения мощной</p>
            <p class="txt txt_left">эрекции.</p>

            <div @click="openAside" 
                data-key="twoFirst" 
                class="txt_left wrap_more wrap_more_left">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </div>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>

export default {
  name: 'ScreenTwo',
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
}
</script>

<style lang="scss" scoped>
.screen-two {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #0A0B11;
  background-image: url('../../assets/img/bg-s2-22.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-blend-mode: lighten;
  mix-blend-mode: lighten;

  @media screen and ( max-width: 560px ) {
    background-position: -305px bottom;
    background-size: 215%;
  }
}
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}
.content > div {
  margin-right: 40px;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and ( max-width: 560px ) {
    justify-content: flex-start;
    padding-top: 70px;
  }
}
.content > div { display: flex; }
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
  object-fit: contain;
  right: 60px;
  bottom: 0;
  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
  @media screen and (max-width: 560px) {
    min-width: 680px;
    right: -60px;
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
.circle {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 100px;
  width: 100px;
  height: 100px;
  border: 14px solid rgba(255, 255, 255, .2);
  box-sizing: border-box;
  border-radius: 50%;
}
.timer__txt {
  font-family: 'Aldrich';
  font-size: 36px;
  line-height: 43px;
}
.block-2 {
  margin-top: 100px;

  &_txt_wrap {
    margin-left: 30px;
  }
  & .txt {
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
  }
}

.tb_d-none {
  @media screen and (max-width: 1280px) { display: none; }
}
.mb_d-none {
  @media screen and (max-width: 560px) { display: none !important; }
}
.mb-d {
  display: none !important;
  @media screen and (max-width: 560px) {
    display: block !important;
  }
}

.btn_mob {
  position: absolute;
  top: calc(60% - 14.5px);
  right: 60px;
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
