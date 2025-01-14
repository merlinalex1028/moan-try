<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ReactivityPrinciple from './reactivity-principle.md'

interface RouteComponentMap {
  ReactivityPrinciple: Component
}

type RouteName = keyof RouteComponentMap

const route = useRoute()

const componentMap = ref<RouteComponentMap>({
  ReactivityPrinciple
})
</script>

<template>
  <component :is="componentMap[route.name as RouteName]" />
</template>

<style scoped lang="scss">

</style>
