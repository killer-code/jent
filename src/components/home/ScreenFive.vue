<template>
  <section class="screen-five">
    <div class="container">
      
      <section class="content page-1-content">
        <h2 class="caption-2">Действует быстро</h2>

        <div class="_mt-7">
          <p class="txt txt_left">
            Препарат Джент действует эффективно, без долгих
          </p>
          <p class="txt txt_left">
            ожиданий и усилий. В отличие от таблеток, оральный спрей 
          </p>
          <p class="txt txt_left">
            Джент быстро всасывается через слизистую оболочку
          </p>
          <p class="txt txt_left">
            полости рта и действует уже через 10 минут с момента 
          </p>
          <p class="txt txt_left">
            использования. 
          </p>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreenFive',
}
</script>

<style lang="scss" scoped>
.screen-five {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #060113;
  background-image: url('../../assets/img/bg-s5.jpg');
  background-repeat: no-repeat;
  background-position: bottom;

  -webkit-box-shadow: inset 0px -17px 22px -2px rgba(255,255,255,.1);
  -moz-box-shadow:    inset 0px -17px 22px -2px rgba(255,255,255,.1);
  box-shadow:         inset 0px -17px 22px -2px rgba(255,255,255,.1);
}
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}
.scene-4-static {
  position: absolute;
  bottom: -25px;
  right: -100px;
  z-index: -1;

  @media screen and (max-width: 768px) {
    left: 20%;
  }
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
  padding-top: 20vh;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
  object-fit: contain;
  bottom: 0;
  right: -100px;

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
</style>
