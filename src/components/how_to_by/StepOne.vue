<template>
  <section class="row">
    <WestSide 
      :formData="formData" 
      :pharmacy="pharmacy" 
      :cities="cities"
      :maxHeight="maxHeight" />

    <Map :pharmacy="pharmacy" :maxHeight="maxHeight" />
  </section>
</template>

<script>
import Map      from '@/components/how_to_by/Map'
import WestSide from '@/components/how_to_by/WestSide'

export default {
  name: 'StepOne',
  props: ['formData', 'pharmacy', 'cities', 'maxHeight'],
  components: { Map, WestSide, },
}
</script>

<style lang="scss" scoped>
.row { display: flex; }
</style>
