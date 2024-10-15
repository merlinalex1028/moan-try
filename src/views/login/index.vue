<script setup lang="ts">
import { useRoute } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'

const route = useRoute()
</script>

<template>
  <div class="h-100vh flex-center bg-gray/10">
    <div class="h-md w-md border-base border-rounded-xl bg-white p-xs shadow-lg">
      <component :is="route.name === 'Login' ? Login : Register" />
    </div>
  </div>
</template>
