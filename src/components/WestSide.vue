<template>
  <transition name="slide-left2right">
    <section class="westside" v-show="asideData.isOpen">
      <aside v-if="asideData.description && asideData.title"
        class="aside_wrap">
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
  @media screen and ( max-width: 560px ) {
    margin-top: 16px;
  }
}
.westside {
  position: fixed;
  transition: .5s ease;
  background: rgba(0,0,0,1);
  left: 0;
  right: 70vw;
  top: 0;
  bottom: 0;
  max-width: 400px;
  height: 100vh;
  padding: 45px 30px;
  z-index: 10;

  @media screen and ( max-width: 560px ) {
    min-width: 100vw;
    max-width: 100vw;
  }
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
.aside_wrap {
  position: relative;
  max-height: 90vh;
  overflow: scroll;
}

.aside {
  &__body {
    margin-top: 30px;
  }
  &__txt {
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
    opacity: .7;
    margin-bottom: 16px;
  }
  &__btn {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
    color: #fff;
    opacity: .7;
    background: #f36d01;
    margin-top: 30px;
    transition: opacity .3s ease;
    cursor: pointer;

    @media screen and ( max-width: 560px ) {
      opacity: 1;
    }

    &:focus { outline: none; }
    &:hover { opacity: 1; }

    & img {
      margin-left: 10px;
    }
  }
}

.caption-3 {
  @media screen and ( max-width: 560px ) {
    font-size: 23px;
    line-height: 30px;
  }
}

.slide-left2right-enter-active, 
.slide-left2right-leave-active {
  transition: left right .5s ease;
  @media screen and ( max-width: 560px ) {
    transition: left right 1s ease;
  }
}
.slide-left2right-enter, 
.slide-left2right-leave-to {
  left: -400px;
  right: 100vw;

  @media screen and ( max-width: 560px ) {
    left: -100vh;
  }
}
.westside {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar { width: 0; }
</style>