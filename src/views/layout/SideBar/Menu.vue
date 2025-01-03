<script setup lang="ts">
import type { IMenuItem } from '@/types/sidebar'
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'

const model = ref<IMenuItem[]>([
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/backstage/dashboard'
      }
    ]
  },
  {
    label: 'Display Content',
    items: [
      {
        label: 'Emoji',
        icon: 'pi pi-fw pi-image',
        to: '/display-content/emoji'
      }
    ]
  },
  {
    label: 'WEB API',
    items: [
      {
        label: 'CustomEvent',
        icon: 'pi pi-fw pi-send',
        to: '/webapi/custom'
      }
    ]
  },
  {
    label: 'Programming Techniques',
    items: [
      {
        label: 'BetterCode',
        icon: 'pi pi-fw pi-code',
        items: [
          {
            label: 'collection',
            to: '/programming-techniques/better-code/index'
          },
          {
            label: 'async/await',
            to: '/programming-techniques/better-code/async-await'
          },
          {
            label: 'error handling',
            to: '/programming-techniques/better-code/error-handling'
          }
        ]
      }
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
