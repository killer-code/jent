<template>
  <section>
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
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Form',
  props: [
    'formData', 
    'city', 
    'citiesOptions', 
    'parmacyOptions',
    'getSpeciality',
  ],
  computed: {
    
  },
  methods: {
    ...mapActions(['createOrder', 'fetchPharmacy']),
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
    this.getUserCity();
  },
  watch: {
    citiesOptions() {
      setTimeout(() => { this.getUserCity() }, 300) ;
    }
  }
}
</script>