<script lang="ts" setup>
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <v-list-item :to="props.to" color="secondary">
    <v-list-item-title><slot /></v-list-item-title>
  </v-list-item>
</template>
