<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const value = ref('')

function listener(e: CustomEvent<{ value: string }>) {
  value.value = e.detail.value
}

onMounted(() => {
  window.addEventListener('inputValue', listener as EventListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('inputValue', listener as EventListener)
})
</script>

<template>
  <div>
    <div class="text-lg font-500">
      Listener Component
    </div>
    <div>
      value: {{ value }}
    </div>
  </div>
</template>
