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
      
      <Form :formData="formData" :city="city"
        :citiesOptions="citiesOptions"
        :parmacyOptions="parmacyOptions"
        :getSpeciality="getSpeciality" />

    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Form from '@/components/how_to_by/Form'

export default {
  name: 'Order',
  components: { Form },
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
    cityForGetPharmacy: function() {
      if ( this.formData.city != '' ) {
        return this.formData.city;
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchUserIP',  
      'fetchCities', 
      'fetchPharmacy',
      'fetchUserCity',
    ]),
  },
  mounted() {
    this.fetchCities();
  },
  watch: {
    userIP() {
      if ( this.userIP ) this.fetchUserCity(this.userIP);
    },
    cityForGetPharmacy() {
      this.fetchPharmacy(this.formData.city);
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
