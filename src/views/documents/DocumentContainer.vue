<script setup lang="ts">
defineProps<
  {
    title: string
  }
>()
</script>

<template>
  <div class="mb-8 text-2xl font-700">
    {{ title }}
  </div>
  <slot />
</template>
