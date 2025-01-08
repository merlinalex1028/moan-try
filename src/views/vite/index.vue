<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ViteBasic from './basic.md'

interface RouteComponentMap {
  ViteBasic: Component
}

type RouteName = keyof RouteComponentMap

const route = useRoute()

const componentMap = ref<RouteComponentMap>({
  ViteBasic
})
</script>

<template>
  <component :is="componentMap[route.name as RouteName]" />
</template>

<style scoped lang="scss">

</style>
