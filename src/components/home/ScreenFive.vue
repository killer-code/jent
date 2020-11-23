<template>
  <section class="screen-five">
    <div class="container">
      
      <section class="content page-1-content">
        <h2 class="caption-2">Совместим<br class="mb_d-none"> со всем</h2>

        <div class="_mt-7 ">
          <p class="txt txt_left">
            Джент совместим с алкоголем, а прием пищи 
            <br class="mb_d-none">
            не снижает эффективность. Идеален для
            <br class="mb_d-none">
            ношения в кармане: компактный размер, 
            <br class="mb_d-none">
            легкоснимающаяся этикетка, крышка-  
            <br class="mb_d-none">
            предохранитель от случайных нажатий.
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

  // -webkit-box-shadow: inset 0px -17px 22px -2px rgba(255,255,255,.1);
  // -moz-box-shadow:    inset 0px -17px 22px -2px rgba(255,255,255,.1);
  // box-shadow:         inset 0px -17px 22px -2px rgba(255,255,255,.1);

  @media screen and (max-width: 560px) {
    background: #060113;
    background-image: url('../../assets/img/bg-s5-mob.jpg');
    background-repeat: no-repeat;
    background-position: top;

    height: auto;
  }
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
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and (max-width: 560px) {
    height: auto;
    padding-top: 52vh; 
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
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
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
</style>
