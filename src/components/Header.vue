<template>
  <header class="app-header" :class="{ 'app-header_min': asideData.isOpen }">
    <div class="west-side">
      <button class="app-btn">
        <img src="@/assets/img/burger.svg" alt="">
      </button>

      <router-link to="/" class="main-logo">
        <img src="@/assets/img/logo.svg" alt="">
      </router-link>
    </div>
    
    <p class="discription">
      Информация для специалистов здравоохранения
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['asideData'],
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 60px 100px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all .7s ease;

  &_min { left: 30vw; }
}
.app-btn {
  border: 0;
  background: none;
  cursor: pointer;

  &:focus { outline: none; }
}
.discription {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;

  opacity: 0.7;
}
.west-side {
  display: flex;
  align-items: center;
}
.main-logo { margin-left: 10px; }

</style>
