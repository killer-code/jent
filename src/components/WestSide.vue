<template>
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
</template>

<script>
export default {
  name: 'WestSide',
  props: ['asideData'],
  mounted() {
    console.log(this.asideData);
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: baseline;
}
.westside {
  transition: .5s ease;
  background: #000;
  min-width: 30vw;
  height: 100vh;
  padding: 45px 30px;
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
</style>