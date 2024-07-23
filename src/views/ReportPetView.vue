<template>
    <div> 
        <h1> Reporte Pet</h1>
        
        <GMapMap
          :center="{ lat: 19.42712177542439, lng: -99.16766908824462 }"
          :zoom="15"
          style="width: 100%; height: 400px"
        >
          <GMapMarker :position="{ lat: 19.42712177542439, lng: -99.16766908824462 }" />
        </GMapMap>
    </div>
</template>

<script>
export default {
  name: 'ReportPetView',
  data() {
    return {
      products: []
    }
  },
  created() {
  }
}
</script>