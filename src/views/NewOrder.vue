<template>
  <section class="">
    <div class="container">

      <OrderHeader :step="step" />

      <el-card class="box-card" 
        v-if="step !== 3"
        :class="{ 'box-card_min' : step == 2, 'd-none' : step == 3 }" >
        <div>
          <section v-if="step === 0">
            <StepOne
              :formData="formData" 
              :pharmacy="allPharmacy" 
              :cities="citiesOptions"
              :maxHeight="maxHeight" />
          </section>

          <section v-if="step == 1">
            <StepTwo :formData="formData" />
          </section>

          <section v-if="step == 2">
            <StepThree :code="formCode" />
          </section>

          <section class="card__footer justify_between">
            <button class="btn__store prev"
              :class="{ 'order-2' : step == 2 }" 
              @click="prevStep">
              Назад
            </button>
            <button class="btn__store next"
              :class="{ 'order-1' : step == 2 }" 
              :disabled="disabledBtn" 
              @click="nextStep">
              {{ step === 2 ? 'Подтвердить' : 'Далее' }}
            </button>

            <section class="order-3"
              :class="deltaTime !== 0 ? 'justify_between' : 'justify_center'" 
              v-if="step == 2">
              <div class="timer" v-if="deltaTime !== 0">
                <p class="timer__txt_1 clock">{{ deltaTime }}</p>
              </div>
              <div class="timer__txt">
                <p class="timer__txt_1">Не получили код?</p>
                <a href="#" class="timer__txt_2 link"
                  @click.stop.prevent="repeatSMS"
                  :class="{'link_disabled' : deltaTime !== 0}">
                  Выслать новый
                </a>
              </div>
            </section>
          </section>
        </div>
      </el-card>

      <StepFour v-if="step === 3" />

    </div>
  </section>
</template>

<script>
// AIzaSyDMmTRqn819N4o9BJ2r0N4J_0VPL8KAcLU
import gmapsInit from '@/utils/gmaps';
import { mapGetters, mapActions } from 'vuex'

import OrderHeader from '@/components/how_to_by/OrderHeader'

import StepOne   from '@/components/how_to_by/StepOne'
import StepTwo   from '@/components/how_to_by/StepTwo'
import StepThree from '@/components/how_to_by/StepThree'
import StepFour  from '@/components/how_to_by/StepFour'

export default {
  name: 'NewOrder',
  components: { OrderHeader, StepOne, StepTwo, StepThree, StepFour },
  data: function() {
    return {
      formData: {
        city: '',
        speciality: ' ',
        store_uid: '',
        phone: '',
        email: '',
        name: '',
        count: 1,
        perInfo: false,
        aply: false,
      },
      
      formCode: { code: '', },

      response: '',
      step: 0,
      valid: true,
      gameOver: 180000,
      deltaTime: 0,
      isMobile: window.innerWidth < 561,
    }
  },
  computed: {
    ...mapGetters([
      'userIP', 
      'userCity', 
      'allCities', 
      'allPharmacy',
      'getSpeciality',
    ]),
    ip: function() {
      this.fetchUserIP();
    },
    city: function() {
      if ( this.ip ) {
        if ( !localStorage.getItem('city') ) {
          this.fetchUserCity(this.ip);
        } else {
          return localStorage.getItem('city');
        }
      }
    },
    citiesOptions: function() {
      let cities = [];
      if ( this.allCities ) {
        this.allCities.forEach(city => {
          cities.push({
            value: city.BRANCH_UID,
            label: city.NAME,
          })
        });
      }
      
      return cities;
    },
    cityForGetPharmacy: function() {
      if ( this.formData.city != '' ) {
        return this.formData.city;
      }
    },
    selectedCity: function() {
      return this.formData.city;
    },
    dataStep3: function() {
      return {
        phone: this.formData.phone,
        code: this.formCode.code
      }
    },
    disabledBtn: function() {
      if ( this.step === 0 && 
          ( this.formData.city == '' ||   
          this.formData.store_uid == '' )) {
            return true
      } else if ( this.step === 1 && (
        this.formData.speciality == ' ' ||
        this.formData.phone == '' ||
        this.formData.email == '' ||
        this.formData.name == ''  ||
        !this.formData.perInfo || !this.formData.aply
      )) {
        return true;
      }  else if ( this.step === 2 && (
        this.formCode.code == '' ||
        this.formCode.code.length < 4
      )) {
        return true;
      }
    },
    maxHeight: function() {
      if ( this.isMobile ) {
        return window.innerHeight
      } else {
        return window.innerHeight / 3
      }
    },
  },
  methods: {
    ...mapActions([
      'fetchUserIP',  
      'fetchCities', 
      'fetchPharmacy',
      'fetchUserCity',
      'createOrder',
      'pushSMS',
      'getSMS',
    ]),
    getUserCity() {
      this.citiesOptions.forEach(city => {
        if ( city.label == localStorage.getItem('city') ) {
          this.formData.city = city.label;
        }
      });
      if ( this.formData.city === '' ) {
        this.citiesOptions.forEach(city => {
          if ( city.label == localStorage.getItem('district') ) {
            this.formData.city = city.label;
          }
        })
      }
    },
    prevStep() {
      if (this.step-- < 1) this.step = 0;
    },
    async nextStep() {
      if ( this.step === 1 ) {
        try {
          this.submitForm()
            .then(() => {
              try {
                let res = this.getSMS(this.formData)
                if ( res == 'ok' ) {
                  this.valid = false;
                  return;
                }
              }
              catch(e) {
                console.log(e);
              }
            })
        }
        catch(e) {
          console.log(e)
        }   
      } else if ( this.step === 2 ) {
        try {
          let res = await this.pushSMS(this.dataStep3)
          if ( res == 'ok' ) {
            this.step ++;
          } else {
            this.valid = false;
          }
        }
        catch(e) {
          console.log(e);
        }
      } else {
        if (this.step++ > 2) this.step = 3;
      }
    },
    async submitForm() {
      this.response = await this.createOrder(this.formData);
      console.log(this.response);
      if ( this.response == 'ok' ) {
        this.step ++;
        return;
      } else {
        return;
      }
    },
    async repeatSMS() {
      let res = await this.getSMS(this.formData);
      this.gameOver = 180000;
      this.timer();
    },
    timer() {
      setInterval(() => {
        if ( this.gameOver > 0 && this.step == 2 ) {
          this.gameOver -= 1000;
          this.deltaTime = this.$moment(this.gameOver).format('mm:ss');
        } else {
          this.deltaTime = 0;
        }
      }, 1000)
    }
  },
  mounted() {
    this.fetchUserIP();
    this.fetchCities();
    this.getUserCity();
    this.timer();
  },
  watch: {
    userIP() {
      if ( this.userIP ) this.fetchUserCity(this.userIP);
    },
    cityForGetPharmacy() {
      this.fetchPharmacy(this.formData.city);
    },
    citiesOptions() {
      setTimeout(() => { this.getUserCity() }, 300) ;
    },
    selectedCity() {
      localStorage.city = this.selectedCity;
    },
    step() {
      if ( this.step === 2 ) {
        this.timer();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row { display: flex; }
.justify_between { 
  display: flex; 
  justify-content: space-between;

  @media screen and ( max-width: 560px ) {
    flex-direction: row;
    align-items: center;
  } 
}
.order-3.justify_between {
  @media screen and ( max-width: 560px ) {
    flex-direction: column;
    align-items: center;
  } 
}

.container {
  max-width: 1070px;
  padding: 0 15px;
  margin: auto;

  @media screen and ( max-width: 560px ) {
    padding: 0;
  }
}
.box-card {
  background: none;
  border: 1px solid #343434;
  box-sizing: border-box;
  border-radius: 6px;

  &_min {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 520px;
    width: fit-content;
    margin: 0 auto;

    & .card__footer {
      display: flex;
      flex-direction: column;
      border: none;
    }
  }
}
.card__footer {
  border-top: 1px solid #343434;
  padding: 20px 20px 0;
  margin: 20px -20px 0;
}

.btn__store {
  border-radius: 4px;
  padding: 8px 15px;
  border: none;
  color: #fff;
  cursor: pointer;

  &:focus { outline: none; }
  &:disabled { opacity: 0.5; }
}
.prev { background: none; }
.next { background: #f36d01; }

.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }

.timer__txt {
  display: flex;
  font-size: 15px;
  &_1 { color: #fff; }
  &_2 {
    margin-left: 5px;
    cursor: pointer;
  }
  @media screen and ( max-width: 560px ) {
    flex-direction: column;
    margin-top: 10px;
  }
}
.d-none { display: none; }
.timer__txt {
  justify-content: center;
}
.link {
  color: #f36d01;
  opacity: .7;
  transition: all .3s ease;

  &:hover { opacity: 1; } 
  &_disabled {
    opacity: .3;
    pointer-events: none;
  }
}
.order-1, .order-2 { width: 100%; }
.clock { color: #f36d01; }
</style>
