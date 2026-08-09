<script setup lang="ts">
import AppNavDrawer from '@/components/AppNavDrawer.vue'
</script>

<template>
  <v-app>
    <app-nav-drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
