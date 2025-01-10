<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DockerBasic from './basic.md'

interface RouteComponentMap {
  DockerBasic: Component
}

type RouteName = keyof RouteComponentMap

const route = useRoute()

const componentMap = ref<RouteComponentMap>({
  DockerBasic
})
</script>

<template>
  <component :is="componentMap[route.name as RouteName]" />
</template>

<style scoped lang="scss">

</style>
