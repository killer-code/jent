<template>
  <section>
    <h1 class="caption-1">Заказать Джент</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix app-form-header">
        <h2 class="caption-3 _dark">
          Ваш город <strong>{{ formData.city }}</strong>?
        </h2>
        <div class="app-row">
          <p>Если нет выберите город:</p>
          <el-select v-model="formData.city" 
            :placeholder="city" 
            class="app-select_city">
              <el-option
                v-for="item in citiesOptions"
                :value="item.label"
                :key="item.value"
                :label="item.label">
              </el-option>
          </el-select>
        </div>
      </div>
      {{ formData }}
      <div class="text item">
        <el-input
          placeholder="ФИО"
          v-model="formData.name"
          clearable>
        </el-input>

        <el-select v-model="formData.store_uid" 
          placeholder="Выберите аптеку" 
          class="">
            <el-option
              v-for="item in parmacyOptions"
              :value="item.value"
              :key="item.value"
              :label="item.label">
            </el-option>
        </el-select>

        <el-input type="tel"
          placeholder="Телефон"
          v-model="formData.phone"
          clearable>
        </el-input>

        <el-input type="mail"
          placeholder="email"
          v-model="formData.email"
          clearable>
        </el-input>

        <el-select v-model="formData.speciality" 
          placeholder="Выберите специальность" 
          class="">
            <el-option
              v-for="item in getSpeciality"
              :value="item"
              :key="item"
              :label="item">
            </el-option>
        </el-select>
      </div>

      <el-button type="primary"
        @click.prevent="sendOrder">Батон
      </el-button> 
    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Order',
  data: function() {
    return {
      formData: {
        city: '',
        speciality: '',
        store_uid: '',
        phone: '',
        email: '',
        name: '',
        count: 1,
      },
      
      response: '',
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
  },
  methods: {
    ...mapActions([
      'fetchUserIP',  
      'fetchCities', 
      'fetchPharmacy',
      'fetchUserCity',
      'createOrder',
    ]),
    async sendOrder() {
      this.response = await this.createOrder(this.formData);
    },
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
  },
  mounted() {
    this.fetchCities();
    this.fetchPharmacy(this.formData.city);
    this.getUserCity();
  },
  watch: {
    userIP() {
      if ( this.userIP ) this.fetchUserCity(this.userIP);
    },
    citiesOptions() {
      setTimeout(() => { this.getUserCity() }, 300) ;
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 40px;
}
.caption-3 {
  font-size: 36px;
  line-height: 36px;
}
._dark {
  color: #3B3B3B;
}
.app-form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-row {
  display: flex;
  align-items: center;
}
.app-select_city {
  margin-left: 15px;
}
</style>
