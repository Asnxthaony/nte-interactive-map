export interface MapMatter {
  type: string
  name: string
  icon: string
  sites: MapSite[]
}

export interface MapSite {
  name?: string
  x: number
  y: number
  z?: number
  w?: number
}
