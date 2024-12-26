<script setup lang="ts">
import Description from './description.md'
import Dispatch from './dispatch.vue'
import Listener from './listener.vue'
</script>

<template>
  <Description />
  <div class="slide-enter">
    <div class="flex gap-10">
      <Dispatch class="w-full border-base rounded p-4" />
      <Listener class="w-full border-base rounded p-4" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
