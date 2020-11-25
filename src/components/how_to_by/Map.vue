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
import gmapsInit       from '@/utils/gmaps'
import MarkerClusterer from '@googlemaps/markerclustererplus';
import { mapGetters }  from 'vuex'

export default {
  name: 'Map',
  props: ['pharmacy', 'maxHeight'],
  data: () => ({
    map: '',
    clusterStyle: [{
      textColor: '#F36D01',
      url: require('../../assets/img/cluster-icon.svg'),
      height: 30,
      width: 30,
    }],
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
    },
    mcOptions: function() {
      return {
        gridSize: 50,
        styles: this.clusterStyle,
        maxZoom: 15
      }
    },
  },
  methods: {
    drowMarkers(store) {
      if ( store ) {
        this.map = new google.maps.Map(
          document.getElementById("map"), this.mapOptions
        )
        let markers = [];

        for (let i = 0; i < store.length; i++) {
          const coords = [ 
            Number(store[i].LAT), 
            Number(store[i].LON)
          ];
          const latLng = new google.maps.LatLng(coords[0], coords[1]);

          let marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            icon: require('../../assets/img/map-pin.svg'),
          });
          markers.push(marker);
        }

        const markerCluster = new MarkerClusterer(
          this.map, markers, this.mcOptions
        );

        markers.forEach(m => {
          m.addListener('click', (e) => {
            console.log(m);
            m.setIcon(require('../../assets/img/map-pin-a.svg'))
          })
        })
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

<style lang="scss">
.cluster span {
  font-size: 14px;
  line-height: 30px;
}
</style>