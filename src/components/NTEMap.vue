<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-rastercoords'

//
import type { MapMatter, NTEMapConfig } from '@/types/Map'

import { worldPosToMapPos } from '@/utils/map-utils'

const props = defineProps<{
  mapConfig: NTEMapConfig
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
    if (matter.isHideByDefault) return

    matter.sites.forEach((site) => {
      const siteName = site.name ? `${matter.name}-${site.name}` : matter.name

      if (matter.type === 'SceneArea001') {
        const placeNameMarker = L.marker(
          rc.unproject(worldPosToMapPos(site.x, site.y, props.mapConfig)),
          {
            icon: L.divIcon({
              iconSize: [0, 0],
            }),
          },
        ).bindTooltip(site.name!, {
          permanent: true,
          direction: 'center',
          className: 'map-location show-level-1',
        })

        placeNameMarker.addTo(mapInstance)
      } else if (matter.type === 'SceneArea002') {
        const placeName = L.DomUtil.create('div')
        placeName.innerText = site.name!

        if (site.rot) {
          placeName.style.transform = `rotateZ(${site.rot}deg)`
        }

        const placeNameMarker = L.marker(
          rc.unproject(worldPosToMapPos(site.x, site.y, props.mapConfig)),
          {
            icon: L.divIcon({
              iconSize: [0, 0],
            }),
          },
        ).bindTooltip(placeName, {
          permanent: true,
          direction: 'center',
          className: 'map-location show-level-2',
        })

        placeNameMarker.addTo(mapInstance)
      } else {
        const marker = L.marker(rc.unproject(worldPosToMapPos(site.x, site.y, props.mapConfig)), {
          icon: L.icon({
            iconUrl: matter.icon,
            iconSize: [38, 38],
          }),
        }).bindPopup(`${site.id}<br>${siteName}<br>X: ${site.x} Y: ${site.y}`)

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

  const mapConfig = props.mapConfig
  const rc = new L.RasterCoords(map, [mapConfig.mapSize, mapConfig.mapSize])

  map.setMaxZoom(rc.zoomLevel())
  map.setView(
    rc.unproject(worldPosToMapPos(mapConfig.mapCenter.x, mapConfig.mapCenter.y, mapConfig)),
    3,
  )

  rasterCoordsRef.value = rc

  L.tileLayer(mapConfig.urlTemplate, {
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
  font-size: 24px;
}

.show-level-1 {
  @each $level in 5, 6, 7 {
    [zoom-level='#{$level}'] & {
      opacity: 0 !important;
    }
  }
}

.show-level-2 {
  @each $level in 3, 4 {
    [zoom-level='#{$level}'] & {
      opacity: 0 !important;
    }
  }
}
</style>
