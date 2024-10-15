<script setup lang="ts">

</script>

<template>
  <button v-bind="$attrs" class="border-base p-2">
    <slot />
  </button>
</template>
