<script setup lang="ts">
defineProps<
  {
    title?: string
  }
>()
</script>

<template>
  <div class="flex-center gap-4">
    <div v-if="title" class="w-20">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
