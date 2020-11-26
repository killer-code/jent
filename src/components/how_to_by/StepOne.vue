<template>
  <section>
    <section class="row align-center" v-if="isMobile">
      <el-switch
        v-model="isMap"
        class="switch"
        active-color="rgba(255,255,255,.5)"
        inactive-color="#f36d01">
      </el-switch>

      <p class="switch__txt" :class="{ 'txt_map': !isMap }">
        {{ isMap ?  'К списку' : 'На карте' }}
      </p>
    </section>
    

    <section class="row">
      <WestSide 
        :formData="formData" 
        :pharmacy="pharmacy" 
        :cities="cities"
        :class="{ 'west_mob_active' : !isMap }"
        class="west_mob"
        :maxHeight="maxHeight" />

      <Map :pharmacy="pharmacy" 
        :maxHeight="maxHeight"
        class="map_mob"
        :formData="formData" />
    </section>
  </section>
  
</template>

<script>
import Map      from '@/components/how_to_by/Map'
import WestSide from '@/components/how_to_by/WestSide'

export default {
  name: 'StepOne',
  props: ['formData', 'pharmacy', 'cities', 'maxHeight'],
  data: () => ({
    isMobile: window.innerWidth < 561,
    isMap: false,
  }),
  components: { Map, WestSide, },
  computed: {
    store: function() {
      return this.formData.store_uid;
    }
  },
  watch: {
    store() {
      this.isMap = !this.isMap;
    }
  }
}
</script>

<style lang="scss" scoped>
.row { 
  display: flex; 
  @media screen and ( max-width: 560px ) {
    position: relative;
  }
}
.align-center { 
  align-items: center; 
  margin: 0 0 20px;
}
.west_mob {
  @media screen and ( max-width: 560px ) {
    position: absolute;
    opacity: 0;
    width: 0;
    z-index: 10;
    transition: all .5s ease;
    background: rgba(0,0,0,1);

    &_active {
      opacity: 1;
      width: 100%;
    }
  }
}
.map_mob {
  @media screen and ( max-width: 560px ) {
    padding: 0;
  }
}

.switch__txt {
  margin-left: 10px;
  color: #fff;
}
.txt_map {
  color: #f36d01;
}
</style>
