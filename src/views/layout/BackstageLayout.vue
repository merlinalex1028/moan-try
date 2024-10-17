<script setup lang="ts">
import { EHeaderSource } from '@/enums/layout'
import { useRoute } from 'vue-router'
import Header from './Header.vue'
import SideBar from './SideBar/index.vue'

const route = useRoute()
</script>

<template>
  <Header :source="EHeaderSource.backstage" />
  <div class="h-[100vh] w-full flex pt-16">
    <SideBar />
    <div :class="{ 'm-4': route.meta.gap }" class="flex-1 overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>
