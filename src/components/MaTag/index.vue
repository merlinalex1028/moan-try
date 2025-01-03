<script setup lang="ts">
import type { ITagProps } from '.'

defineProps<ITagProps>()
</script>

<template>
  <div class="w-fit border border-primary-400 rounded-md bg-primary-100 object-contain p-2 text-gray-6">
    {{ text }}
  </div>
</template>
