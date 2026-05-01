<script setup lang="ts">
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-rastercoords'
import { worldPosToMapPos } from '@/utils/map-utils'

const mapContainerRef = ref<HTMLElement>()
const mapInstanceRef = ref<L.Map>()

function initMap() {
  if (!mapContainerRef.value || mapInstanceRef.value) return

  const map = L.map(mapContainerRef.value, {
    preferCanvas: true,

    // Control options
    attributionControl: false,
    zoomControl: false,

    // Map State Options
    crs: L.CRS.Simple,
    zoom: 3,
    minZoom: 3,
    maxZoom: 7,

    // Animation options
    zoomAnimation: false,
  })

  const mapCenter = worldPosToMapPos(-45328, 118095)

  // assign map and image dimensions
  const rc = new L.RasterCoords(map, [22528, 22528])
  map.setMaxZoom(rc.zoomLevel())
  map.setView(rc.unproject(mapCenter), 3)

  L.tileLayer('./tiles/{z}/{x}/{y}.png', {
    noWrap: true,
    bounds: rc.getMaxBounds(),
    maxNativeZoom: rc.zoomLevel(),
  }).addTo(map)

  mapInstanceRef.value = map

  L.control.zoom({ position: 'bottomleft' }).addTo(map)
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div ref="mapContainerRef" class="mapCont"></div>
</template>

<style scoped>
.mapCont {
  height: 100%;
  width: 100%;
}
</style>
