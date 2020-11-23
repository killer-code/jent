<template>
  <section>
    <h2 class="title">Подтверждение <br> номера телефона</h2>
    <p class="sub-title">Введите проверочный код</p>

    <section class="input-code">
      <input class="input-code__number"
        v-model="num1" 
        type="text" @input="inputCode" 
        maxlength="1" />

      <input class="input-code__number" 
        v-model="num2" 
        type="text" @input="inputCode" 
        maxlength="1" />

      <input class="input-code__number" 
        v-model="num3" 
        type="text" @input="inputCode" 
        maxlength="1" />

      <input class="input-code__number" 
        v-model="num4" 
        type="text" @input="inputCode" 
        maxlength="1" />
    </section>

  </section>
</template>

<script>
export default {
  name: 'StepThree',
  props: ['code'],
  data: () => ({
    num1: '', num2: '', num3: '', num4: '',
  }),
  computed: {
    fullCode: {
      get: function() {
        return this.num1 + this.num2 + this.num3 + this.num4;
      },
      set: function(newValue) {
        let numbers = newValue.split('');
        this.num1 = numbers[0];
        this.num2 = numbers[1];
        this.num3 = numbers[2];
        this.num4 = numbers[3];
      }
    },
  },
  methods: {
    inputCode(e) {
      const container = document.querySelector('.input-code');
      const listInput = container.querySelectorAll('.input-code__number');
      for ( let i = 0; i < listInput.length; i ++ ) {
        let k = i;
        if ( e.target === listInput[i] && e.data && listInput[++k] ) {
          listInput[++i].focus();
        }
      }
    },
  },
  watch: {
    fullCode() {
      this.code.code = this.fullCode.trim();
    },
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 24px;
  color: #fff;

  @media screen and ( max-width: 560px ) {
    font-size: 23px;
    margin-bottom: 16px;
  }
}
.sub-title {
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
}
.input-code {
  @media screen and ( max-width: 560px ) {
    display: flex;
    justify-content: center;
  }

  &__number {
    text-align: center;

    font-family: 'Aldrich', 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 42px;
    color: #fff;

    width: 88px;
    height: 80px;
    border: 1px solid #525252;
    box-sizing: border-box;
    border-radius: 6px;
    background: #0A0B11;
    margin: 60px 15px 30px;
    cursor: pointer;

    &:focus { 
      outline: none; 
      border-color: #fff;
    }

    @media screen and ( max-width: 560px ) {
      width: 48px;
      height: 48px;
      font-size: 38px;
      line-height: 38px;
      margin: 23px 3px 0;
    }
  }
}
br {
  @media screen and ( max-width: 560px ) {
    display: none;
  }
}
</style>
