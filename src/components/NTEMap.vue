<script setup lang="ts">
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-rastercoords'

//
import type { MapMatter } from '@/types/Map'

import { worldPosToMapPos } from '@/utils/map-utils'

const props = defineProps<{
  matters?: MapMatter[]
}>()

const mapContainerRef = ref<HTMLElement>()
const mapInstanceRef = ref<L.Map>()
const rasterCoordsRef = ref<L.RasterCoords>()

function createMarkLayer() {
  if (!mapInstanceRef.value || !rasterCoordsRef.value) return

  const mapInstance = mapInstanceRef.value
  const rc = rasterCoordsRef.value

  props.matters?.forEach((matter) => {
    matter.sites.forEach((site) => {
      const marker = L.marker(rc.unproject(worldPosToMapPos(site.x, site.y)), {
        icon: L.icon({
          iconUrl: matter.icon,
          iconSize: [32, 32],
        }),
      }).bindPopup(`X: ${site.x} Y: ${site.y}`)

      marker.addTo(mapInstance)
    })
  })
}

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

  const rc = new L.RasterCoords(map, [22528, 22528])
  map.setMaxZoom(rc.zoomLevel())
  map.setView(rc.unproject(mapCenter), 3)

  rasterCoordsRef.value = rc

  L.tileLayer('./tiles/{z}/{x}/{y}.png', {
    noWrap: true,
    bounds: rc.getMaxBounds(),
    maxNativeZoom: rc.zoomLevel(),
  }).addTo(map)

  mapInstanceRef.value = map

  L.control.zoom({ position: 'bottomleft' }).addTo(map)

  createMarkLayer()
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
