<template>
  <section>
    <h1 class="caption-1">Заказать Джент</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="caption-3 _dark">Форма</h2>
      </div>
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
    ...mapGetters(['userIP', 'userCity']),
    ip: function() {
      if ( localStorage.getItem('ip') ) {
        return localStorage.getItem('ip');
      }
    },
  },
  methods: {
    ...mapActions(['fetchUserIP', 'fetchUserCity']),
  },
  mounted() {
    if ( !localStorage.getItem('ip') ) {
      this.fetchUserIP();
      localStorage.ip = this.userIP;
    };
    if ( localStorage.getItem('ip') && !localStorage.getItem('city') ) {
      this.fetchUserCity(localStorage.getItem('ip'));
      localStorage.city = this.userCity;
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
