<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Description from './description.md'
import Dispatch from './dispatch.vue'
import Listener from './listener.vue'

const isShowExample = ref(false)

onMounted(() => {
  setTimeout(() => {
    isShowExample.value = true
  }, 1000)
})
</script>

<template>
  <Description />
  <div v-if="isShowExample" class="slide-enter mt-4">
    <div class="flex gap-2">
      <Dispatch class="w-full border-base rounded p-4" />
      <Listener class="w-full border-base rounded p-4" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
