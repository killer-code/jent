<template>
  <section class="">
    <div class="container">

      <OrderHeader :step="step" />

      <el-card class="box-card" :class="{ 'box-card_min' : step == 2 }">
        <div>
          <section class="row" v-if="step === 0">
            
            <WestSide 
              :formData="formData" 
              :pharmacy="allPharmacy" 
              :cities="citiesOptions"
              :maxHeight="maxHeight" />
            <Map :pharmacy="allPharmacy" :maxHeight="maxHeight" />
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
              @click="nextStep">
              {{ step === 2 ? 'Подтвердить' : 'Далее' }}
            </button>

            <section class="justify_between order-3" v-if="step == 2">
              <div class="timer"></div>
              <div class="timer__txt">
                <p class="timer__txt_1">Не получили код?</p>
                <p class="timer__txt_2">Выслать новый код</p>
              </div>
            </section>
          </section>
        </div>
      </el-card>

    </div>
  </section>
</template>

<script>
// AIzaSyDMmTRqn819N4o9BJ2r0N4J_0VPL8KAcLU
import gmapsInit from '@/utils/gmaps';
import { mapGetters, mapActions } from 'vuex'

import OrderHeader from '@/components/how_to_by/OrderHeader'

import Map from '@/components/how_to_by/Map'
import WestSide from '@/components/how_to_by/WestSide'

import StepTwo   from '@/components/how_to_by/StepTwo'
import StepThree from '@/components/how_to_by/StepThree'

export default {
  name: 'NewOrder',
  components: { OrderHeader, Map, WestSide, StepTwo, StepThree, },
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
      },
      
      formCode: { code: '', },

      response: '',
      step: 0,
      maxHeight: window.innerHeight / 3,
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
      if ( !localStorage.getItem('ip') ) {
        this.fetchUserIP();
      } else {
        return localStorage.getItem('ip');
      }
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
    }
  },
  methods: {
    ...mapActions([
      'fetchUserIP',  
      'fetchCities', 
      'fetchPharmacy',
      'fetchUserCity',
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
    nextStep() {
      if ( this.step == 0 && 
          this.formData.city !== '' && 
          this.formData.store_uid !== '' ) {
            this.step ++
      } else if ( this.step == 1 ) {
        this.step ++;
      } else if ( this.step == 2 ) {
        this.step ++
      } else {
        return
      }
    },
  },
  mounted() {
    this.fetchCities();
    this.getUserCity();
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
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: .2em;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.row { display: flex; }
.justify_between { display: flex; justify-content: space-between; }

.container {
  max-width: 1070px;
  padding: 0 15px;
  margin: auto;
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

.card__store {
  padding: 16px;
  border: 1px solid #525252;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 16px 0;
  cursor: pointer;
  transition: border-color .3s ease;

  &:hover { border-color: #F36D01; }
  &_selected { border-color: #F36D01; }
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
}
.prev { background: none; }
.next { background: #f36d01; }

.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }

.timer__txt {
  display: flex;
  &_1 { color: #fff; }
  &_2 {
    color: #79B0F9;
    cursor: pointer;
  }
}
</style>
