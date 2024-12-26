<script setup lang="ts">
import type { IMenuItem } from '@/types/sidebar'
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'

const model = ref<IMenuItem[]>([
  {
    label: 'Home',
    items: [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/backstage/dashboard' }
    ]
  },
  {
    label: 'WEB API',
    items: [
      { label: 'CustomEvent', icon: 'pi pi-fw pi-send', to: '/webapi/custom' }
    ]
  }
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <MenuItem :item="item" :index="i" />
    </template>
  </ul>
</template>

<style scoped lang="scss">

</style>
