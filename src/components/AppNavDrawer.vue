<script setup lang="ts">
import AppNavItem from './AppNavItem.vue'

const navItems = computed(() => {
  const items = [{ href: '/hethereau', name: '海特洛市' }]

  if (import.meta.env.DEV) {
    items.push({ href: '/bank', name: '粉爪大劫案' })
  }

  return items
})
</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <app-nav-item v-for="item in navItems" :key="item.href" :to="item.href">
        {{ item.name }}
      </app-nav-item>
    </v-list>
  </v-navigation-drawer>
</template>
