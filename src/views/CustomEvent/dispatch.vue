<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

function handleInput(e: Event) {
  const customEvent = new CustomEvent('inputValue', {
    detail: {
      value: (e.target as HTMLInputElement).value
    }
  })
  window.dispatchEvent(customEvent)
}
</script>

<template>
  <div>
    <div class="text-lg font-500">
      Dispatch Component
    </div>
    <span>input: </span><input v-model="value" class="border" type="text" @input="handleInput">
  </div>
</template>
