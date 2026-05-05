<script setup lang="ts">
import type { MapMatter } from '@/types/Map'

import NTEMap from '@/components/NTEMap.vue'
import { MapConfigs } from '@/utils/map-utils'

const Matters: MapMatter[] = [
  {
    type: 'SceneArea001',
    name: '一级区域',
    icon: '',
    sites: [
      { id: 'm10', name: 'M10区', x: 3875.521, y: 272754.47 },
      { id: 'qjd', name: '桥间地', x: -110297.08, y: 145296.62 },
      { id: 'wwp', name: '未闻浦', x: -169444.47, y: 201202.56 },
      { id: 'hkt', name: '绘空町', x: -133499.86, y: 112428.695 },
      { id: 'area004', name: '米格尔区', x: -52933.387, y: 20294.473 },
      { id: 'area005', name: '新赫兰德区', x: -4895.132, y: 97549.805 },
    ],
  },
  {
    type: 'SceneArea002',
    name: '二级区域',
    icon: '',
    sites: [
      { id: 'LQP', name: '绿墙坡', x: -105457.516, y: 125390.3 },
      { id: 'bjj', name: '半角街', x: -91038.086, y: 162591.45 },
      { id: 'ALHG', name: '奥利哈刚「理想馆」', x: -193454.39, y: 219499.23 },
      { id: 'ZY', name: '塞润尼缇庄园', x: -166096.06, y: 182340.9 },
      { id: 'subarea00403', name: '水菱湖', x: -63600.45, y: 2461.524 },
      { id: 'subarea00404', name: '摇曳镇', x: -88497.22, y: -2394.52 },
      { id: 'subarea00405', name: '北角镇', x: -39815.51, y: -598.394 },
      { id: 'subarea00501', name: '库勒涅步行街', x: -9058.131, y: 85443.625 },
      { id: 'subarea00503', name: '愿木坡', x: 55341.59, y: 107145.805 },
      { id: 'subarea00504', name: '海角广场', x: 8263.953, y: 141041.72 },
    ],
  },
  {
    type: 'SceneArea002',
    name: '一级道路',
    icon: '',
    sites: [
      { id: 'YXGLJ', name: '异象管理局', x: 3875.521, y: 272754.47 },
      { id: 'dkedq', name: '提卡尔大桥', x: -66585.59, y: 244394.22, rot: 54.0 },
      { id: 'ywdq', name: '鸢尾大桥', x: -69596.07, y: 130083.945, rot: -28.0 },
      { id: 'hhgl', name: 'Z42环海公路', x: -82026.18, y: 174292.55, rot: -48.0 },
      { id: 'hhgl_0', name: 'Z42环海公路', x: -184821.83, y: 235568.55, rot: -12.0 },
      { id: 'hhgl_1', name: 'Z42环海公路', x: -185507.52, y: 178246.2 },
      { id: 'hhgl_2', name: 'Z42环海公路', x: -149253.81, y: 158455.31, rot: -30.0 },
      { id: 'hjmdd', name: '火炬木大道', x: -121483.016, y: 162969.22, rot: -30.0 },
      { id: 'slzdd', name: '水梨子大道', x: -118469.6, y: 177265.55, rot: 50.0 },
      { id: 'slzdd_0', name: '水梨子大道', x: -142585.89, y: 142566.27, rot: 64.0 },
      { id: 'JYRDD', name: '卷叶榕大道', x: -138240.23, y: 111533.26, rot: -25.0 },
      { id: 'road00501', name: '林檎大道', x: -63520.465, y: 76078.836 },
      { id: 'road00401', name: '白尾树盘山公路', x: -89613.086, y: -37799.734, rot: -22.0 },
      { id: 'road00401_0', name: '白尾树盘山公路', x: 4478.396, y: -13048.215, rot: 22.0 },
      { id: 'road00404', name: '圣托里斯大道', x: -42779.316, y: 44476.477 },
      { id: 'road00403', name: '铁心9号路', x: -20263.98, y: 27370.613 },
      { id: 'road00402', name: '水菱湖路', x: -56256.223, y: 18332.826 },
      { id: 'road00502', name: '麦昆幽灵大道', x: -41875.83, y: 84357.85, rot: 92.0 },
      { id: 'road00503', name: '水晶山大道', x: -14689.976, y: 125337.23, rot: 78.0 },
      { id: 'road00504', name: '卡美洛大道', x: 1673.475, y: 116464.13, rot: 78.0 },
      { id: 'road00505', name: '鳄鱼钟大道', x: 15753.233, y: 110035.62, rot: 78.0 },
      { id: 'road00506', name: '弗拉明戈大道', x: 26594.482, y: 98738.625, rot: 78.0 },
      { id: 'road00509', name: '胡桃夹公路', x: -54783.484, y: 97376.3, rot: 86.0 },
      { id: 'road00510', name: '伊亚大道', x: -48329.35, y: 58561.258 },
      { id: 'road00507', name: '奇诺大道', x: 2246.343, y: 94480.12, rot: -20.0 },
      { id: 'road00508', name: '塔林大道', x: -27276.404, y: 136573.66, rot: -14.0 },
      { id: 'road00510_0', name: '鹦鹉螺隧道', x: -38470.098, y: 174193.38, rot: -16.0 },
    ],
  },
  {
    type: 'Heterotopia',
    name: '维特海默塔',
    icon: './icons/Heterotopia.webp',
    sites: [
      { id: 'WertheimerTower_001', name: '桥间地', x: -94823.0, y: 165376.0 },
      { id: 'WertheimerTower_002', name: '未闻浦', x: -184528.28, y: 211012.42 },
      { id: 'WertheimerTower_003', name: '绘空町', x: -171144.38, y: 106510.41 },
      { id: 'WertheimerTower_004', name: '米格尔区', x: -30515.836, y: 7779.323 },
      { id: 'WertheimerTower_005', name: '新赫兰德区', x: 10521.551, y: 65394.363 },
    ],
  },
  {
    type: 'Transfer',
    name: 'ReroRero电话亭',
    icon: './icons/Transfer.webp',
    sites: [
      { id: 'MapTransfer_00001', name: 'M10区-01', x: 4002.999, y: 260999.62 },
      { id: 'MapTransfer_00101', name: '桥间地-01', x: -91137.586, y: 153176.33 },
      { id: 'MapTransfer_00102', name: '桥间地-02', x: -123430.0, y: 153690.0 },
      { id: 'MapTransfer_00201', name: '绘空町-01', x: -135274.78, y: 200707.36 },
      { id: 'MapTransfer_00301', name: '绘空町-01', x: -152550.0, y: 128914.0 },
      { id: 'MapTransfer_00302', name: '绘空町-02', x: -102836.61, y: 66336.62 },
      { id: 'MapTransfer_00401', name: '米格尔区-01', x: -81535.125, y: -15737.951 },
      { id: 'MapTransfer_00402', name: '米格尔区-02', x: -18738.71, y: 39748.168 },
      { id: 'MapTransfer_00403', name: '米格尔区-03', x: 13070.0, y: 20005.0 },
      { id: 'MapTransfer_00501', name: '新赫兰德区-01', x: -58843.703, y: 84450.836 },
      { id: 'MapTransfer_00502', name: '新赫兰德区-02', x: 40423.0, y: 102071.0 },
      { id: 'MapTransfer_00503', name: '新赫兰德区-03', x: -9813.496, y: 124269.89 },
      { id: 'MapTransfer_00504', name: '新赫兰德区-04', x: 13545.0, y: 121325.0 },
      { id: 'MapTransfer_00505', name: '新赫兰德区-05', x: -11354.659, y: 74277.586 },
    ],
  },
  {
    type: 'WorldSafeBox',
    name: '保险箱',
    icon: './icons/TreasureBox.webp',
    sites: [
      { id: 'Safe_Box_Lv1_003_001', name: '银保险箱', x: -178284.0, y: 111580.0 },
      { id: 'Safe_Box_Lv1_003_002', name: '银保险箱', x: -125319.0, y: 46886.0 },
      { id: 'Safe_Box_Lv1_004_001', name: '银保险箱', x: -121179.0, y: 5552.0 },
      { id: 'Safe_Box_Lv1_004_002', name: '银保险箱', x: -39765.0, y: -26142.0 },
      { id: 'Safe_Box_Lv1_004_003', name: '银保险箱', x: 55264.0, y: 13835.0 },
      { id: 'Safe_Box_Lv1_004_004', name: '银保险箱', x: 48035.0, y: 6938.0 },
      { id: 'Safe_Box_Lv1_004_005', name: '银保险箱', x: 43443.5, y: 34831.645 },
      { id: 'Safe_Box_Lv1_004_006', name: '银保险箱', x: 43936.0, y: 33046.0 },
      { id: 'Safe_Box_Lv3_004_001', name: '金保险箱', x: 53964.0, y: 14241.0 },
      { id: 'Safe_Box_Lv3_004_002', name: '金保险箱', x: 43320.0, y: 35521.0 },
    ],
  },
]
</script>

<template>
  <NTEMap :map-config="MapConfigs.Hethereau" :matters="Matters" />
</template>
