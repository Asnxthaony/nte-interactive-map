<script setup lang="ts">
import type { MapMatter } from '@/types/Map'

import NTEMap from '@/components/NTEMap.vue'

// MapArea
//
// [000] M10区
// [001] 桥间地
// [002] 未闻浦
// [003] 绘空町
// [004] 米格尔区
// [005] 新赫兰德区

const Matters: MapMatter[] = [
  {
    type: 'SceneArea001',
    name: '大地图一级区域名',
    icon: './icons/Default.webp',
    sites: [
      { name: 'M10区', x: 3875.521, y: 272754.47 },
      { name: '桥间地', x: -110297.08, y: 145296.62 },
      { name: '未闻浦', x: -169444.47, y: 201202.56 },
      { name: '绘空町', x: -133499.8, y: 112428.695 },
      { name: '米格尔区', x: -52933.387, y: 20294.473 },
      { name: '新赫兰德区', x: -4895.132, y: 97549.805 },
    ],
  },
  {
    type: 'Heterotopia',
    name: '维特海默塔',
    icon: './icons/Heterotopia.webp',
    sites: [
      { name: '桥间地', x: -94823, y: 165376 },
      { name: '未闻浦', x: -184528.28, y: 211012.42 },
      { name: '绘空町', x: -171144.38, y: 106510.41 },
      { name: '米格尔区', x: -30515.836, y: 7779.323 },
      { name: '新赫兰德区', x: 10521.551, y: 65394.363 },
    ],
  },
  {
    type: 'Transfer',
    name: 'ReroReco电话亭',
    icon: './icons/Transfer.webp',
    sites: [
      { name: 'M10区-01', x: 4002.999, y: 260999.62 },
      { name: '桥间地-01', x: -91137.586, y: 153176.33 },
      { name: '桥间地-02', x: -123430, y: 153690 },
      { name: '绘空町-01', x: -135274.78, y: 200707.36 },
      { name: '绘空町-01', x: -152550, y: 128914 },
      { name: '绘空町-02', x: -102836.61, y: 66336.62 },
      { name: '米格尔区-01', x: -81535.125, y: -15737.951 },
      { name: '米格尔区-02', x: -18738.71, y: 39748.168 },
      { name: '米格尔区-03', x: 13070, y: 20005 },
      { name: '新赫兰德区-01', x: -58843.703, y: 84450.836 },
      { name: '新赫兰德区-02', x: 40423, y: 102071 },
      { name: '新赫兰德区-03', x: -9813.496, y: 124269.89 },
      { name: '新赫兰德区-04', x: 13545, y: 121325 },
      { name: '新赫兰德区-05', x: -11354.659, y: 74277.586 },
    ],
  },
]
</script>

<template>
  <NTEMap :matters="Matters" />
</template>
