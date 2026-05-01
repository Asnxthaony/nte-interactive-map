import L from 'leaflet'

const MAP_EDGE_SIZE = 687134
const MAP_TILE_SIZE = 512
const MAP_TILE_COUNT = 44
const MAP_SIZE = MAP_TILE_SIZE * MAP_TILE_COUNT

const MAP_SCALE = MAP_EDGE_SIZE / MAP_SIZE
const MAP_CENTER_X = -40532.004
const MAP_CENTER_Y = 131446.33

export function worldPosToMapPos(worldX: number, worldY: number): [number, number] {
  let mapX = (worldX - MAP_CENTER_X) / MAP_SCALE
  let mapY = (worldY - MAP_CENTER_Y) / MAP_SCALE

  mapX = MAP_SIZE / 2 + mapX
  mapY = MAP_SIZE / 2 + mapY

  return [mapX, mapY]
}

export const CustomCRS = L.Util.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(0.0625, 0, 0.0625, 0),
})
