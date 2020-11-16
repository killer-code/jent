<template>
  <section>
    <h1 class="caption-1">Заказать Джент</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="caption-3 _dark">Форма</h2>
      </div>
      {{ ip }}
      <!-- {{ city.city.name_ru }} -->
      {{ allCities }}
      <!-- {{ localStorage.getItem('city') }} -->
      <div class="text item">
        QWEQWE
      </div>
    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Order',
  computed: {
    ...mapGetters(['userIP', 'userCity', 'allCities']),
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
          return JSON.parse(localStorage.getItem('city'));
        }
      }
    }
  },
  methods: {
    ...mapActions(['fetchUserIP', 'fetchUserCity', 'fetchCities']),
  },
  mounted() {
    this.fetchCities();
  },
  watch: {
    userIP() {
      if ( this.userIP ) this.fetchUserCity(this.userIP);
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
</style>
