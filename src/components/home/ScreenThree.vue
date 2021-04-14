<template>
  <section class="screen-three">
    <div class="container">

      <section class="content page-1-content">
        <MobileAnimeScreenThree v-if="isMobile" />

        <h2 class="caption-2">
          Действующее<br class="mb_d-none">
          вещество
        </h2>

        <div class="_mt-7">
          <p class="txt txt_left">
            В основе Джент — хорошо изученная молекула силденафил.
            <br class="mb_d-none">
            Вещество входит в рекомендации Американской 
            <br class="mb_d-none"> 
            урологической ассоциации (AUA), Европейской ассоциации 
            <br class="mb_d-none">
            урологов (EAU).
          </p>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
import MobileAnimeScreenThree from '@/components/home/MobileAnimeScreenThree'

export default {
  name: 'ScreenThree',
  components: { MobileAnimeScreenThree },
  data: () => ({
    isMobile: window.innerWidth < 561,
  }),
  mounted() {}
}
</script>

<style lang="scss" scoped>
.screen-three {
  position: relative;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 560px) {
    height: auto;
  }
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
    height: auto;
    // margin-top: -20px;
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
  height: 100vh;

  &-1 { 
    object-fit: cover; 
    bottom: 0;
    height: 100vh;
    width: 100vw;
  }

  @media screen and (max-width: 768px) {
    object-fit: contain;
    min-height: 700px;
  }
  @media screen and (max-width: 560px) {
    object-fit: cover;
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
.mb_d-none {
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}

.img-jent_static-mob {
  opacity: 0;
  @media screen and (max-width: 560px) {
    opacity: 1;
    width: 100vw;
  }
}
</style>
