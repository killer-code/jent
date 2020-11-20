<template>
  <section class="screen-three">
    <div class="container">
      
      <section class="scene-3-static">
        <img class="img-jent_static-1" 
          data-depth-x="-0.05" data-depth-y="-0.05"
          src="@/assets/img/bg-s3-1.jpg">

        <img class="img-jent_static animate-west-side" 
          data-depth-x="-0.1" data-depth-y="-0.1"
          src="@/assets/img/bg-s3-2.png">
        <img class="img-jent_static animate-east-side" 
          data-depth-x="-0.2" data-depth-y="-0.2"
          src="@/assets/img/bg-s3-3.png">

        <img class="img-jent_static-1" 
          data-depth-x="-0.05" data-depth-y="-0.05"
          src="@/assets/img/bg-s3-4.png">
      </section>

      <section class="content page-1-content">
        <h2 class="caption-2">Активная молекула </h2>

        <div class="_mt-7">
          <p class="txt txt_left">
            Спрей Джент — это всё тот же безопасный и хорошо
          </p>
          <p class="txt txt_left">
            изученный 
            <strong class="txt txt_strong">силденафил</strong>. 
            Вещество уже давно используют 
          </p>
          <p class="txt txt_left">
            для лечения проблем с потенцией. Оно отлично помогает
          </p>
          <p class="txt txt_left">
            мужчинам достигать и поддерживать мощную эрекцию.
          </p>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'ScreenThree',
  mounted() {
    // Delete sprite
    const sceneSt = document.querySelector('.scene-3-static');
    let parallaxInstance = new Parallax(sceneSt);
    // END
  }
}
</script>

<style lang="scss" scoped>
.screen-three {
  position: relative;
  height: 100vh;
  width: 100vw;

  -webkit-box-shadow: inset 0px -17px 22px -2px rgba(255,255,255,.05);
  -moz-box-shadow:    inset 0px -17px 22px -2px rgba(255,255,255,.05);
  box-shadow:         inset 0px -17px 22px -2px rgba(255,255,255,.05);
}
.content {
  display: flex;
  max-width: 1400px;
  margin: 80px auto 0;
}
.scene-3-static {
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
  justify-content: center;
  align-items: flex-start;
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
  margin-top: 150px;
  object-fit: contain;

  &-1 { 
    object-fit: cover; 
    bottom: 0;
    height: 100vh;
    width: 100vw;
  }

  @media screen and (max-width: 768px) {
    object-fit: cover;
  }
  @media screen and (max-width: 560px) {
    object-fit: contain;
    min-height: 400px;
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

// .animate-west-side {
//   animation: anim-west 10s ease infinite alternate;
// }

// @keyframes anim-west {
//   0% { 
//     left: -10px;
//     top: -10px;
//   }
//   100% { 
//     left: 10px;
//     top: 10px;
//   }
// }
</style>
