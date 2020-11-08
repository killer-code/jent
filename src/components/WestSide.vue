<template>
  <transition name="slide-left2right">
    <section class="westside" v-show="asideData.isOpen">
      <aside v-if="asideData.description && asideData.title">
        <section class="app-header">
          <h3 class="caption-3">
            {{ asideData.title }}
          </h3>
          <button class="btn-arrow" @click="asideData.isOpen = false;">
            <img src="@/assets/img/arrow-r.svg" alt="">
          </button>
        </section>

        <section class="aside__body">
          <p class="aside__txt" 
            v-for="txt in asideData.description" 
            :key="txt">{{ txt }}</p>
        </section>
          
        <section class="aside__footer" v-if="asideData.link">
          <router-link :to="`/${asideData.link}`">
            <button class="aside__btn">
              <p class="aside__more">Читать полностью</p>
              <img src="@/assets/img/arr_r.svg" class="" alt="">
            </button>
          </router-link>
        </section>
      </aside>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'WestSide',
  props: ['asideData'],
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: baseline;
}
.westside {
  position: absolute;
  transition: .5s ease;
  background: #000;
  left: 0;
  right: 70vw;
  top: 0;
  bottom: 0;
  min-width: 30vw;
  max-width: 30vw;
  height: 100vh;
  padding: 45px 30px;
  z-index: 10;
}

.btn-arrow {
  background: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  width: fit-content;

  &:focus { outline: none; }
  & > img { 
    width: 44px;
    height: 24px;
    transform: rotate(180deg); 
  }
}

.aside {
  &__body {
    margin-top: 30px;
  }
  &__txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    opacity: .7;
    margin-bottom: 16px;
  }
  &__btn {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    margin-top: 20px;
    cursor: pointer;

    & img {
      margin-left: 10px;
      filter: invert(1);
    }
  }
}

.slide-left2right-enter-active, 
.slide-left2right-leave-active {
  transition: left right .3s ease;
}
.slide-left2right-enter, 
.slide-left2right-leave-to {
  left: -30vw;
  right: 100vw;
}
</style>