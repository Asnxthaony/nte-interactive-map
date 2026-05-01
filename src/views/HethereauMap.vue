<script setup lang="ts">
import type { MapMatter } from '@/types/Map'

import NTEMap from '@/components/NTEMap.vue'

const Matters: MapMatter[] = [
  {
    name: 'ReroReco电话亭',
    icon: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/25/75379475/7d650757c10b70cb42189f7fca0c9778_7547860493386240880.png',
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
