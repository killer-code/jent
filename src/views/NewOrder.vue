<template>
  <section class="">
    <div class="container">

      <el-steps 
        :active="step" 
        finish-status="success" 
        class="card__header"
        align-center>

        <el-step 
          class="step" 
          title="Выбор аптеки">
        </el-step>

        <el-step 
          class="step" 
          title="Оформление">
        </el-step>

        <el-step 
          class="step" 
          title="Подтверждение">
        </el-step>
      </el-steps>

      <el-card class="box-card">
        <div>
          <section class="row" v-if="step === 0">
            <div class="west-side"
              :style="{'max-height': `${maxHeight}px`}">
              <el-select 
                v-model="formData.city" 
                :placeholder="city" 
                class="app-select_city">
                  <el-option
                    v-for="item in citiesOptions"
                    :value="item.label"
                    :key="item.value"
                    :label="item.label">
                  </el-option>
              </el-select>

              <section class="card__store" 
                :data-uid="pharm.STORE_UID"
                @click="getUid"
                v-for="pharm of allPharmacy" :key="pharm.ID">
                <h4 class="store__title">{{ pharm.NAME }}</h4>
                <div>
                  <p class="store__txt">
                    <strong class="stor__sub">
                      Адрес:
                    </strong>
                    {{ pharm.ADDRESS }}
                  </p>
                  <p class="store__txt">
                    <strong class="stor__sub">
                      Режим работы:
                    </strong>
                    {{ pharm.WORKTIME }}
                  </p>
                </div>
              </section>
            </div>
            
            <Map :pharmacy="allPharmacy" :maxHeight="maxHeight" />
          </section>

          <section v-if="step == 1">
            <StepTwo :formData="formData" />
          </section>

          <section class="card__footer justify_between">
            <button class="prev" @click="prevStep">
              Назад
            </button>
            <button class="next" @click="nextStep">
              Далее
            </button>
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

import Map from '@/components/how_to_by/Map'
import StepTwo from '@/components/how_to_by/StepTwo'

export default {
  name: 'NewOrder',
  components: { Map, StepTwo, },
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
    parmacyOptions: function() {
      let pharmacy = [];
      if ( this.allPharmacy ) {
        this.allPharmacy.forEach(pharm => {
          pharmacy.push({
            value: pharm.STORE_UID,
            label: pharm.NAME,
          })
        });
      }

      return pharmacy;
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
    getUid(e) {
      const el = e.target.closest('.card__store');
      document.querySelectorAll('.card__store_selected')
        .forEach(el => {
          if ( el.classList.contains('card__store_selected') ) {
            el.classList.remove('card__store_selected')
          }
        })
      el.classList.add('card__store_selected');

      const uid = el.dataset.uid;
      this.formData.store_uid = uid;
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
.row { display: flex; }
.justify_between { display: flex; justify-content: space-between; }

.container {
  max-width: 1070px;
  padding: 0 15px;
  margin: auto;
}
.card__header {
  margin-bottom: 32px;
}
.box-card {
  background: none;
  border: 1px solid #343434;
  box-sizing: border-box;
  border-radius: 6px;
}
.west-side {
  overflow-y: auto;
  width: 45%;
  padding-right: 20px;
}
.app-select_city {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px; 
  margin-bottom: 20px;
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
.store__title {
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #fff;
}
.stor__sub {
  font-size: 15px;
  line-height: 20px;
  color: #F36D01;
}
.store__txt {
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 5px;
  color: #8f8f8f;
}
.prev {
  background: none;
  cursor: pointer;
  border-width: 0;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fff;
  padding: 8px 15px;
  transition: all .3s ease;

  &:focus { outline: none; }
}
.next {
  background: #f36d01;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  transition: all .3s ease;
  &:focus { outline: none; }
}
</style>

<style lang="scss">
// Steps
.is-process {
  & .el-step__icon {
    color: #fff;
    background: #f36d01;
  }
}
.el-step__title.is-process {
  font-weight: 400;
  color: #f36d01;
}
.el-step__icon {
  width: 36px;
  height: 36px;
  background: #282828;
  border: none !important;
}
.el-step.is-horizontal .el-step__line {
  top: 18px;
}
.el-step.is-center .el-step__line {
  left: 70%;
  right: -50%;
  background: #343434;
}
.el-step.is-horizontal .el-step__line {
  height: 1px;
  width: 60%;
}
.el-step__line-inner { border-color: #f36d01 ; }
.el-step__title.is-success,
.el-step__head.is-success {
  color: #f36d01 !important;
}

// Select
.el-input__inner {
  background-color: #0a0b11;
  color: #f36d01;
  border: 1px solid #525252;
  &:focus {
    outline: #f36d01 auto 1px;
  }
}
.el-select-dropdown__list {
  background-color: #0a0b11;
  color: #525252;
  border: 1px solid #525252;
}
.el-select-dropdown__item.selected { color: #f36d01; }
</style>
