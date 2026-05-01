export interface MapFloor {
  id: number
  floor: number
  name: string
  pic: string
}

export interface MapMatter {
  name: string
  icon: string
  sites: MapSite[]
}

export interface MapSite {
  mapFloor: number
  x: number
  y: number
}
