<template>
  <section class="wrapper-map">
    <section 
      id="map" 
      :style="{'height': `${maxHeight}px`}">
    </section>
  </section>
</template>

<script>
// AIzaSyDMmTRqn819N4o9BJ2r0N4J_0VPL8KAcLU
import gmapsInit from '@/utils/gmaps'
import { mapGetters } from 'vuex'

export default {
  name: 'Map',
  props: ['pharmacy', 'maxHeight'],
  data: () => ({
    map: '',
  }),
  computed: {
    ...mapGetters(['getMapStyle']),
    mapOptions: function() {
      return {
        zoom: 12,
        center: { lat: Number(this.pharmacy[0].LAT), 
                  lng: Number(this.pharmacy[0].LON) },
        mapID: '7848c1d6687e48d0',
        styles: this.getMapStyle,
        disableDefaultUI: true
      }
    }
  },
  methods: {
    drowMarkers(store) {
      if ( store ) {
        this.map = new google.maps.Map(
          document.getElementById("map"), this.mapOptions
        )
        
        for (let i = 0; i < store.length; i++) {
          const coords = [ 
            Number(store[i].LAT), 
            Number(store[i].LON)
          ];
          const latLng = new google.maps.LatLng(coords[0], coords[1]);
          new google.maps.Marker({
            position: latLng,
            map: this.map,
          });
        }
      }
    }
  },
  async mounted() { 
    try {
      const google = await gmapsInit();
      this.drowMarkers(this.pharmacy);
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    pharmacy() {
      if ( this.pharmacy ) {
        this.map = new google.maps.Map(
          document.getElementById("map"), this.mapOptions
        );
        this.drowMarkers(this.pharmacy);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-map {
  width: 100%;
  padding-left: 10px;
}
#map {
  width: 100%;
  border-radius: 6px;
}
</style>