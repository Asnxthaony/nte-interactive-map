export interface MapMatter {
  type: string
  name: string
  icon: string
  sites: MapSite[]
}

export interface MapSite {
  id: string
  name?: string
  x: number
  y: number
  rot?: number
}
