<template>
  <footer class="app-footer">
    <section class="footer__counter">
      <p>{{ screen }}/6</p>
    </section>

    <button class="btn_circle_down"
      @click="$emit('down')">
        <img src="@/assets/img/arrow-down.svg" alt="">
    </button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['scroll'],
  data: () => ({
    screen: 1,
  }),
  mounted() {
    this.screen = Number(this.scroll) + 1;
  },
  watch: {
    scroll() {
      this.screen = Number(this.scroll) + 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer__counter {
  font-family: 'Aldrich', 'Roboto', sans-serif;
  font-size: 26px;
  line-height: 31px;
  padding: 30px 96px 60px;

  @media screen and (max-width: 1400px) {
    font-size: 23px;
    line-height: 27px;
    padding: 40px 96px 20px;
  }
  @media screen and (max-width: 560px) {
    padding: 20px 15px;
    font-size: 14px;
    line-height: 22px;
  }
}
.btn_circle_down {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: calc(50% - 30px);

  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);

  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:focus { outline: none; }

  @media screen and (max-width: 1400px) {
    width: 46px;
    height: 46px;
    left: calc(50% - 23px);

    & img {
      width: 10px;
    }
  }

  @media screen and (max-width: 560px) {
    width: 36px;
    height: 36px;
    left: calc(50% - 18px);

    & img {
      width: 6px;
    }
  }
}
</style>
