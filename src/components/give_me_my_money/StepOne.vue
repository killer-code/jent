<template>
  <section class="wrapper">

    <el-card class="box-card money">
      <h2 class="card__title">Возврат средств</h2>
      <p class="card__subt">
        Введите код из чека для возврата<br> 
        средств на счёт телефона
      </p>

      <input class="input" 
        type="text" maxlength="8"
        v-model="code">

      <button class="btn__push"
        :disabled="disabledBtn"
        @click="pushCode">
        Подтвердить
      </button>
    </el-card>

    <div class="small_wrap">
      <p class="small">Возникли проблемы?</p>
      <p class="small">
        тел.
        <a href="tel:+78126470246" class="link">8 (812) 647-02-46</a>,
        <a href="mailto:info@jent.men" class="link">info@jent.men</a>
      </p>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StepOne',
  props: ['resp'],
  data: () => ({
    code: ''
  }),
  computed: {
    disabledBtn: function() {
      return this.code.length < 8;
    }
  },
  methods: {
    ...mapActions(['moneyBack']),
    async pushCode() {
      let res = await this.moneyBack(this.code);
      if ( res === 'ok' ) {
        this.resp.isErr = 1;
      } else {
        this.resp.isErr = 2;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;

  @media screen and ( max-width: 560px ) {
    padding-top: 5vh;
  }
}
.box-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #343434;
  box-sizing: border-box;
  border-radius: 6px;
  background: #0A0B11;
  max-width: 520px;
  padding: 32px;

  @media screen and ( max-width: 560px ) {
    padding: 16px;
  }
}
.card {
  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: #fff;
    text-align: center;

    @media screen and ( max-width: 560px ) {
      font-size: 23px;
      line-height: 32px;
    }
  }
  &__subt {
    margin-top: 21px;
    text-align: center;
    color: #fff;
    @media screen and ( max-width: 560px ) {
      font-size: 14px;;
    }
  }
}
.input {
  text-align: center;

  font-family: 'Aldrich', 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 42px;
  color: #fff;

  width: 100%;
  height: 80px;
  border: 1px solid #525252;
  box-sizing: border-box;
  border-radius: 6px;
  background: #0A0B11;
  margin: 60px 0 30px;
  cursor: pointer;

  &:focus { 
    outline: none; 
    border-color: #fff;
  }
  @media screen and ( max-width: 560px ) {
    font-size: 32px;
    line-height: 32px;
    height: 50px;
    margin: 23px 0 16px;
  }
}
.btn__push {
  height: 40px;
  background: #f36d01;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 15px;
  line-height: 24px;
  width: 100%;
  cursor: pointer;

  &:focus { outline: none; }
  &:disabled {
    background: #f36d01;
    opacity: 0.5;
    pointer-events: none;
  }
}
.small {
  text-align: center;
  font-size: 14px;
  color: rgba(255,255,255,.5);
  &_wrap { margin-top: 32px; }
}
.link {
  color: #f36d01;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  opacity: .7;
  transition: all .3s ease;

  &:hover { opacity: 1; } 
}
br {
  @media screen and ( max-width: 560px ) {
    display: none;
  }
}
</style>
