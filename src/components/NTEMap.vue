<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-rastercoords'

//
import type { MapMatter } from '@/types/Map'

import { MapConfig, worldPosToMapPos } from '@/utils/map-utils'

const props = defineProps<{
  matters?: MapMatter[]
}>()

const mapContainerRef = ref<HTMLElement>()
const mapInstanceRef = ref<L.Map>()
const rasterCoordsRef = ref<L.RasterCoords>()

const zoomLevel = ref<number>()

function createMarkLayer() {
  if (!mapInstanceRef.value || !rasterCoordsRef.value) return

  const mapInstance = mapInstanceRef.value
  const rc = rasterCoordsRef.value

  props.matters?.forEach((matter) => {
    matter.sites.forEach((site) => {
      const siteName = site.name ? `${matter.name}-${site.name}` : matter.name

      if (matter.type === 'SceneArea001') {
        const areaName = L.marker(rc.unproject(worldPosToMapPos(site.x, site.y)), {
          icon: L.divIcon({
            iconSize: [0, 0],
          }),
        }).bindTooltip(site.name!, {
          permanent: true,
          direction: 'center',
          className: 'map-location show-level-1',
        })

        areaName.addTo(mapInstance)
      } else if (matter.type === 'SceneArea002') {
        const subAreaName = L.marker(rc.unproject(worldPosToMapPos(site.x, site.y)), {
          icon: L.divIcon({
            iconSize: [0, 0],
          }),
        }).bindTooltip(site.name!, {
          permanent: true,
          direction: 'center',
          className: 'map-location show-level-2',
        })

        subAreaName.addTo(mapInstance)
      } else {
        const marker = L.marker(rc.unproject(worldPosToMapPos(site.x, site.y)), {
          icon: L.icon({
            iconUrl: matter.icon,
            iconSize: [38, 38],
          }),
        }).bindPopup(`${siteName}<br>X: ${site.x} Y: ${site.y}`)

        marker.addTo(mapInstance)
      }
    })
  })
}

function onZoomEnd() {
  if (!mapInstanceRef.value) return

  const mapInstance = mapInstanceRef.value

  zoomLevel.value = mapInstance.getZoom()
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
    minZoom: 3,

    // Animation options
    zoomAnimation: false,
  })

  const rc = new L.RasterCoords(map, [MapConfig.MapSize, MapConfig.MapSize])

  map.setMaxZoom(rc.zoomLevel())
  map.setView(rc.unproject(worldPosToMapPos(MapConfig.MapCenter.X, MapConfig.MapCenter.Y)), 3)

  rasterCoordsRef.value = rc

  L.tileLayer('./tiles/{z}/{x}/{y}.webp', {
    noWrap: true,
    bounds: rc.getMaxBounds(),
    maxNativeZoom: rc.zoomLevel(),
  }).addTo(map)

  mapInstanceRef.value = map

  L.control.zoom({ position: 'bottomleft' }).addTo(map)

  createMarkLayer()

  zoomLevel.value = map.getZoom()

  map.on('zoomend', onZoomEnd)
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div ref="mapContainerRef" class="mapCont" :zoom-level="zoomLevel"></div>
</template>

<style lang="scss">
.mapCont {
  background-color: #010101;
  height: 100%;
  width: 100%;
}

.map-tooltip {
  padding: 0;
  background-color: transparent;
  border: 0;
  color: #ffc23d;
  box-shadow: none;
}

.map-location {
  @extend .map-tooltip;
}

.show-level-1 {
  font-size: 16px;

  @each $level in 5, 6, 7 {
    [zoom-level='#{$level}'] & {
      opacity: 0 !important;
    }
  }
}

.show-level-2 {
  font-size: 18px;

  @each $level in 3, 4 {
    [zoom-level='#{$level}'] & {
      opacity: 0 !important;
    }
  }
}
</style>
