<script setup lang="ts">
import type { MapMatter } from '@/types/Map'

import NTEMap from '@/components/NTEMap.vue'

const Matters: MapMatter[] = [
  {
    name: '维特海默塔',
    icon: 'https://static.ghzs666.com/game-wiki/images/69ec374f6018ac00011530bd.png',
    sites: [
      { x: -94823, y: 165376 },
      { x: -184528.28, y: 211012.42 },
      { x: -171144.38, y: 106510.41 },
      { x: -30515.836, y: 7779.323 },
      { x: 10521.551, y: 65394.363 },
    ],
  },
  {
    name: 'ReroReco电话亭',
    icon: 'https://static.ghzs666.com/game-wiki/images/69ec375f4e6c910001d2691d.png',
    sites: [
      { x: 4002.999, y: 260999.62 },
      { x: -91137.586, y: 153176.33 },
      { x: -123430, y: 153690 },
      { x: -135274.78, y: 200707.36 },
      { x: -152550, y: 128914 },
      { x: -102836.61, y: 66336.62 },
      { x: -81535.125, y: -15737.951 },
      { x: -18738.71, y: 39748.168 },
      { x: 13070, y: 20005 },
      { x: -58843.703, y: 84450.836 },
      { x: 40423, y: 102071 },
      { x: -9813.496, y: 124269.89 },
      { x: 13545, y: 121325 },
      { x: -11354.659, y: 74277.586 },
    ],
  },
]
</script>

<template>
  <NTEMap :matters="Matters" />
</template>
