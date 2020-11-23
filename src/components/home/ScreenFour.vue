<template>
  <section class="screen-four">
    <div class="container">

      <section class="content page-1-content">
        <div class="mb_d-none">
          <div class="timer2">
            <img src="@/assets/img/circle-timer.svg" alt="">
            <p class="timer2__txt">0</p>
          </div>
        </div>

        <div class="txt_wraper">
          <h2 class="caption-2">Всего два нажатия</h2>

          <div class="_mt-7">
            <p class="txt txt_left">
              Спрей начинает всасываться уже во рту и действует всего
              <br class="mb_d-none">
              через 10 минут. Для достижения максимального эффекта Джент
              <br class="mb_d-none">
              нужно запить водой.
            </p>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreenFour',
  props: ['screen'],
  mounted() {
  },
  methods: {
    animeteTimer() {
      const block = document.querySelector('.timer2'),
            count = block.querySelector('.timer2__txt');

      let counter = {
        count: 0,
      }

      this.$anime({
        targets: counter,
        count: 10,
        easing: 'linear',
        round: 1,
        duration: 2000,
        delay: 2000,
        update: function() {
          count.innerHTML = counter.count;
        }
      });
    },
  },
  watch: {
    screen() {
      if ( this.screen == 3 ) {
        this.animeteTimer();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-four {
  position: relative;
  height: 100vh;
  width: 100vw;

  background-color: #0c0b11;
  background-image: url('../../assets/img/bg-s4-11.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1280px) {
    background-size: contain;
  }

  @media screen and (max-width: 560px) {
    background-size: 150%;
    background-position: -110px top;
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
  padding-top: 15vh;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: auto;
    padding-top: 40vh;
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
.mb_d-none {
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}
.timer2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 560px) {
    width: 100%;
  }

  &__txt {
    font-family: 'Aldrich';
    font-size: 250px;
    font-weight: 500;
    line-height: 240px;
    margin-right: 50px;

    background: radial-gradient(148.1% 170.18% at 184.02% -70.18%, #B34F51 0%, #43244E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 1280px) {
      font-size: 150px;
      line-height: 140px;
      margin-right: 70px;
    }

    @media screen and (max-width: 560px) {
      font-size: 60px;
      font-weight: 500;
      line-height: 60px;
      margin-right: 20px;
    }
  }

  & img {
    @media screen and (max-width: 1280px) {
      margin-top: -5vh;
    }
    @media screen and (max-width: 560px) {
      width: 31px;
      height: 31px;
      margin-top: -30px;
    }
  }
}
.txt_wraper {
  margin-top: 10vh;
}
</style>
