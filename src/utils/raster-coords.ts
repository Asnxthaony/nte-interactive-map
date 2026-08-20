import L from 'leaflet'

export class RasterCoords {
  private map: L.Map
  private width: number
  private height: number
  private tileSize: number
  private zoomLevel: number

  constructor(
    map: L.Map,
    width: number,
    height: number,
    tileSize: number = 256,
    setMaxBounds: boolean = true,
  ) {
    this.map = map
    this.width = width
    this.height = height
    this.tileSize = tileSize
    this.zoomLevel = this.getMaxZoom()
    if (setMaxBounds && this.width && this.height) {
      this.setMaxBounds()
    }
  }

  public getMaxZoom(): number {
    const maxDim = Math.max(this.width, this.height)
    return Math.ceil(Math.log2(maxDim / this.tileSize))
  }

  public unproject(coords: L.PointExpression): L.LatLng {
    return this.map.unproject(coords, this.zoomLevel)
  }

  public project(coords: L.LatLngExpression): L.Point {
    return this.map.project(coords, this.zoomLevel)
  }

  public getMaxBounds(): L.LatLngBounds {
    const southWest = this.unproject([0, this.height])
    const northEast = this.unproject([this.width, 0])
    return new L.LatLngBounds(southWest, northEast)
  }

  public setMaxBounds(): void {
    const bounds = this.getMaxBounds()
    this.map.setMaxBounds(bounds)
  }
}
