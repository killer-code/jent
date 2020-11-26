<template>
  <section class="form">
    <section class="form__row">
      <div class="form__label">
        <p>Фамилия*</p>
      </div>

      <div class="form__input">
        <el-input
          v-model="secondName"
          clearable>
        </el-input>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
        <p>Имя*</p>
      </div>

      <div class="form__input">
        <el-input
          v-model="firstName"
          clearable>
        </el-input>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
        <p>Отчество</p>
      </div>

      <div class="form__input">
        <el-input
          v-model="lastName"
          clearable>
        </el-input>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
        <p>Специальность*</p>
      </div>

      <div class="form__input">
        <el-select v-model="formData.speciality"  
          class="form__spec">
            <el-option
              v-for="item in getSpeciality"
              :value="item"
              :key="item"
              :label="item">
            </el-option>
        </el-select>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
        <p>E-mail*</p>
      </div>

      <div class="form__input">
        <el-input
          type="email"
          v-model="formData.email"
          clearable>
        </el-input>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
        <p>Номер телефона*</p>
      </div>

      <div class="form__input">
        <masked-input
          class="el-input__inner"
          type="tel"
          mask="\+7\ (111)111-11-11"
          placeholder="+7 (XXX)XXX-XX-XX"
          v-model="phone"
          clearable>
        </masked-input>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
      </div>

      <div class="form__input">
        <el-checkbox v-model="formData.perInfo"
          calss="form__check">
          <span class="form__check">
            Даю согласие на обработку своих персональных данных
          </span>
        </el-checkbox>
      </div>
    </section>

    <section class="form__row">
      <div class="form__label">
      </div>

      <div class="form__input">
        <el-checkbox v-model="formData.aply"
          calss="form__check">
          <span class="form__check">
            Я подтверждаю правила оферты
          </span>
        </el-checkbox>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import MaskedInput from 'vue-masked-input'

export default {
  name: 'StepTwo',
  props: ['formData'],
  components: { MaskedInput },
  data: () => ({
    firstName: '',
    secondName: '',
    lastName: '',
    phone: '',
  }),
  computed: {
    ...mapGetters(['getSpeciality']),
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.secondName + ' ' + this.lastName
      },
      set: function(newValue) {
        let names = newValue.split(' ');
        this.firstName = names[0];
        this.secondName = names[1];
        this.lastName = names[2];
      }
    }
  },
  watch: {
    fullName() {
      this.formData.name = this.fullName.trim();
    },
    phone() {
      let tel = this.phone.replace(/[^\d]/g, '');
      this.formData.phone = tel;
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    @media screen and ( max-width: 560px ) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__label {
    width: 45%;
    color: #fff;
    @media screen and ( max-width: 560px ) {
      width: 100%;
    }
  }
  &__input {
    width: 100%;
  }
  &__spec {
    width: 100%;
  }
  &__check {
    color: #fff;
    @media screen and ( max-width: 560px ) {
      white-space: normal;
    }
  }
}
</style>

<style lang="scss">
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #F36D01;
  border-color: #F36D01;
}
.el-select-dropdown.el-popper {
  @media screen and ( max-width: 560px ) {
    max-width: 300px !important;
    left: calc(50% - 150px) !important;
  }
}
</style>
