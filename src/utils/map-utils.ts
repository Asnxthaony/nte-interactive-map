import type { NTEMapConfig, NTEMapConfigs } from '@/types/Map'

export const MapConfigs: NTEMapConfigs = {
  Hethereau: {
    urlTemplate: './tiles/{z}/{x}/{y}.webp',
    mapSize: 22528,
    mapCenter: {
      x: -40532.004,
      y: 131446.33,
    },
    mapScale: 687134 / 22528,
  },
  Bank: {
    urlTemplate: './tiles_bank/{z}/{x}/{y}.png',
    mapSize: 16384,
    mapCenter: {
      x: 9008.948,
      y: 2591.7354,
    },
    mapScale: 500000 / 16384,
  },
}

export function worldPosToMapPos(
  worldX: number,
  worldY: number,
  config?: NTEMapConfig,
): [number, number] {
  const { mapSize, mapCenter, mapScale } = config || MapConfigs.Hethereau

  let mapX = (worldX - mapCenter.x) / mapScale
  let mapY = (worldY - mapCenter.y) / mapScale

  mapX = mapSize / 2 + mapX
  mapY = mapSize / 2 + mapY

  return [mapX, mapY]
}
