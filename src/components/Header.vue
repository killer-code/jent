<template>
  <header class="app-header" :class="{ 'app-header_min': asideData.isOpen }">
    <div class="west-side">
      <button class="app-btn" @click="openCloseMenu">
        <img src="@/assets/img/burger.svg" alt="" />
      </button>

      <router-link to="/" class="main-logo">
        <img src="@/assets/img/logo.svg" alt="" />
      </router-link>

      <button @click="$router.push('/order')" class="app-btn__how-by mb_d-none">
        <span>Где купить</span>
      </button>

      <nav class="nav tb_d-none">
        <router-link to="/how-it-works" class="nav__link">
          Как работает
        </router-link>

        <router-link to="/webar" class="nav__link">
          WebAR
        </router-link>

        <router-link to="/instruction" class="nav__link">
          Инструкция
        </router-link>
      </nav>
    </div>

    <p class="discription tb_d-none">
      Информация для специалистов здравоохранения
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['asideData', 'nav'],
  data: () => ({
    menu: false,
  }),
  methods: {
    openCloseMenu() {
      this.nav.isOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 60px 96px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 0.7s ease;

  &_min {
    left: 30vw;
  }

  @media screen and (max-width: 1280px) {
    padding: 40px 30px;
  }
  @media screen and (max-width: 560px) {
    padding: 20px 15px;
  }
}
.app-btn {
  border: 0;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 560px) {
    margin-right: -24px;

    img {
      width: 24px;
      height: 24px;
    }
  }
}
.discription {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  opacity: 0.7;
}
.west-side {
  display: flex;
  align-items: center;

  @media screen and (max-width: 560px) {
    width: 100%;
  }
}
.main-logo {
  margin-left: 34px;

  @media screen and (max-width: 560px) {
    margin-left: auto;
    margin-right: auto;

    img {
      height: 16px;
    }
  }
}
.app-btn__how-by {
  background: none;
  color: #f36d01;
  border: 1px solid #f36d01;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 35px;

  transition: 0.3 all ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: #fff;
  }
}
.nav {
  display: flex;

  &__link {
    color: #fff;
    margin-left: 40px;
  }
}
.tb_d-none {
  @media screen and (max-width: 1280px) {
    display: none;
  }
}
.mb_d-none {
  @media screen and (max-width: 560px) {
    display: none;
  }
}
</style>
