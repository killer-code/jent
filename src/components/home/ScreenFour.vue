<template>
  <section class="screen-four">
    <div class="container">

      <section class="scene-4-static">
        <img class="img-jent_static" 
          data-depth-x="0.15" data-depth-y="0.1"
          src="@/assets/img/bg-s4-1.png">
      </section>
      
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
import Parallax from 'parallax-js'

export default {
  name: 'ScreenFour',
  mounted() {
    // Delete sprite
    const sceneSt = document.querySelector('.scene-4-static');
    let parallaxInstance = new Parallax(sceneSt);
    // END
  }
}
</script>

<style lang="scss" scoped>
.screen-four {
  position: relative;
  height: 100vh;
  width: 100vw;

  -webkit-box-shadow: inset 0px -20px 26px -2px rgba(5,0,18,.75);
  -moz-box-shadow:    inset 0px -20px 26px -2px rgba(5,0,18,.75);
  box-shadow:         inset 0px -20px 26px -2px rgba(5,0,18,.75);
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
  @media screen and (max-width: 560px) {
    justify-content: flex-start;
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
  @media screen and (max-width: 560px) {
    min-width: 480px;
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
