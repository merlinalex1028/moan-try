<script setup lang="ts">
import type { IMenuItem } from '@/types/sidebar'
import { menuList } from '@/constant/menu'
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'

const model = ref<IMenuItem[]>(menuList)
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
