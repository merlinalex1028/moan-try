<script setup lang="ts">
import { useRoute } from 'vue-router'
import LoginIn from './LoginIn.vue'
import Register from './Register.vue'

const route = useRoute()
</script>

<template>
  <div class="flex-center h-100vh bg-gray/10">
    <div class="border-base h-md w-md border-rounded-xl bg-white p-xs shadow-lg">
      <component :is="route.name === 'Login' ? LoginIn : Register" />
    </div>
  </div>
</template>
