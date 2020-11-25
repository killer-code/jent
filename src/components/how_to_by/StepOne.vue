<template>
  <section class="row">
    <WestSide 
      :formData="formData" 
      :pharmacy="pharmacy" 
      :cities="cities"
      :maxHeight="maxHeight" />

    <Map :pharmacy="pharmacy" 
      :maxHeight="maxHeight"
      :formData="formData"  
      v-if="!isMobile"/>
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
  }),
  components: { Map, WestSide, },
}
</script>

<style lang="scss" scoped>
.row { display: flex; }
</style>
