<template>
  <transition name="slide-right2left">
    <section class="how" v-show="dialog">
      <div class="how__header">
        <button class="app-btn"
          @click="$emit('close')">
            <img src="@/assets/img/icon-close.svg" alt="" />
        </button>
      </div>

      <div class="how__body">
        <p>
          Введите код подтверждения заказа из чека. 
        </p>
        <img class="screen" src="@/assets/img/screenshot.jpg" alt="">
        <div class="attention">
          <p>Внимание! Вводить нужно только цифры, игнорируя буквы!</p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'WestSide',
  props: ['dialog'],
}
</script>

<style lang="scss" scoped>
.app-btn {
  background: none;
  border: none;
  cursor: pointer;
  &:focus { outline: none; }

  @media screen and (max-width: 560px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.main-logo {
  @media screen and (max-width: 560px) {
    height: 16px;
  }
}

.how {
  position: fixed;
  transition: all .5s ease;
  background: rgba(0,0,0,1);
  right: 0;
  left: calc(100vw - 350px);
  top: 0;
  bottom: 0;
  min-width: 350px;
  max-width: 350px;
  height: 100vh;
  z-index: 1000;

  @media screen and (max-width: 560px) {
    background: #000;
    min-width: 100vw;
    max-width: 100vw;
    left: 0;
  }

  &__header {
    padding: 45px 30px 18px;
    background: #000;
    display: flex;
    align-content: center;
    justify-content: space-between;

    @media screen and (max-width: 560px) {
      padding: 25px 20px 10px;
    }
  }

  &__body {
    padding: 18px 30px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 560px) {
      padding: 10px 20px 18px;
    }

    & p { margin-bottom: 20px; }
  }

  &__item {
    color: #fff;
    margin: 10px 0;
    font-size: 21px;
    transition: all .3s ease;

    &:hover {
      font-size: 23px;
      margin: 9px 0;
      color: #f36d01;
    }

    @media screen and (max-width: 560px) {
      margin: 7px 0;
      font-size: 18px;

      &:hover {
        font-size: 19px;
        margin: 6px 0;
        color: #f36d01;
      }
    }

    &_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 7px 0;
      border: solid #f36d01 1px;
      border-radius: 6px;
      margin-top: 55px;
      color: #f36d01;
    }
  }
}

.mb-d {
  opacity: 0;
  pointer-events: none;
  @media screen and (max-width: 560px) {
    opacity: 1;
    pointer-events: inherit;
  }
}

.screen {
  border-radius: 6px;
  margin-bottom: 20px;
}
.attention {
  padding: 15px;
  font-size: 18px;
  border-radius: 3px;
  background: #f36d01;
  color: #fff;
  font-weight: 700;

  & p { margin-bottom: 0; }
}

.slide-right2left-enter-active, 
.slide-right2left-leave-active {
  transition: all .3s ease;
}
.slide-right2left-enter, 
.slide-right2left-leave-to {
  right: -350px;
  left: 100vw;
}
</style>