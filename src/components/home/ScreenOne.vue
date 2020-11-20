<template>
  <section class="screen-one">
    <div class="container">
      <section class="scene-static">
        <img class="img-jent_static" 
          data-depth-x="0.2" data-depth-y="0.1"
          src="@/assets/img/jent-static.png">
      </section>

      <section class="content page-1-content">
        <div class="start">
          <h2 class="caption-2">Джент.</h2>
          <h2 class="caption-2 caption-2_gradient">Быстрее ваших</h2>
          <h2 class="caption-2 caption-2_gradient">желаний</h2>

          <div class="txt _mt-7">
            <p>Инновационное решение, которое поможет</p>
            <p>избежать неловких ситуаций и «неудач». Джент в</p>
            <p>новом формате спрея усилит эрекцию за 10 минут.</p>
          </div>
        </div>

        <section>
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
              <strong class="txt txt_strong">мини-спрея</strong>
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
.screen-one {
  position: relative;
  height: 100vh;
  width: 100vw;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
