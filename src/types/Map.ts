export interface MapMatter {
  type: string
  name: string
  icon: string
  isHideByDefault?: boolean
  sites: MapSite[]
}

export interface MapSite {
  id: string
  name?: string
  x: number
  y: number
  rot?: number
}

export interface NTEMapConfig {
  urlTemplate: string
  mapSize: number
  mapCenter: {
    x: number
    y: number
  }
  mapScale: number
}

export interface NTEMapConfigs {
  Hethereau: NTEMapConfig
  Bank: NTEMapConfig
}
