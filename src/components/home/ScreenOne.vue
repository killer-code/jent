<template>
  <section class="screen-one">
    <div class="container">
      
      <transition name="left2right">
        <h2 class="caption-2 caption-2_gradient">КОМПАКТНЫЙ</h2>
      </transition>
      
      <section class="content">
        <div class="start">
          <div class="right_txt _mb-7">
            <p class="txt txt_right">Инновационный</p>
            <p class="txt txt_right">формат 
              <strong class="txt txt_strong">мини-спрея</strong>
            </p>

            <div @click="openAside" 
                 data-key="oneFirst" 
                 class="txt_right wrap_more wrap_more_right">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </div>
          </div>
        </div>


        <div class="end">
          <Timer />
          <div class="right_txt">
            <p class="txt txt_left">Стабильная эрекция</p>
            <p class="txt txt_left">уже через <strong class="txt txt_strong">10 мин</strong></p>

            <div @click="openAside" 
                 data-key="oneSecond"
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
}
</script>

<style lang="scss" scoped>
.screen-one {
  height: 100vh;
  width: 100vw;
}
.content {
  display: flex;
  align-items: space-between;
  flex-direction: column;
  padding: 100px 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.content > div { display: flex; }
.start { display: flex; justify-content: flex-start; align-items: center; }
.end { display: flex; justify-content: flex-end; align-items: center; }

</style>
