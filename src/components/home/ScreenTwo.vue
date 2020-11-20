<template>
  <section class="screen-two">
    <div class="container">
      <div id="canvas"></div>

      <img class="img-jent_static" 
        src="@/assets/img/bg-s2-1.png">

      <!-- <img class="img-jent_static" 
        src="@/assets/img/bg-s2-2.png"> -->
      
      
      <section class="content page-1-content">
        <h2 class="caption-2">Спрей</h2>
        <div class=" _mt-7">
          <div>
            <p class="txt txt_left">
              Одна доза — два нажатия. Спрей Джент имеет
            </p>
            <p class="txt txt_left">
              удобную гибкую дозировку, что снижает риск
            </p>
            <p class="txt txt_left">
              возникновения побочных эффектов. В одном
            </p>
            <p class="txt txt_left">
              «пшике» содержится 12,5 мг, а для получения 
            </p>
            <p class="txt txt_left">
              мощной эрекции хватит всего двух нажатий.
            </p>
          </div>
        </div>

        <div class="block-2 _mt-7">
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
  background: radial-gradient(29.27% 59.49% at 50% 100%, rgba(79, 70, 92, 0.6) 0%, rgba(79, 70, 92, 0) 100%), #0A0B11;
  background-image: url('../../assets/img/bg-s2-2.png');
  background-position: 5vw 32vh;
  background-repeat: no-repeat;
  background-blend-mode: lighten;
  mix-blend-mode: lighten;
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
}
.wrap_more {
  margin-top: 20px;
}
._mt-7 {
  margin-top: 35px;
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

</style>
