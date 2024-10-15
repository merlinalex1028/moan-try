<script setup lang="ts">
import type { ILogin } from '@/types/login'
import MaInput from '@/components/MaInput/index.vue'
import { ref } from 'vue'

const loginForm = ref<ILogin>({
  email: '',
  password: ''
})
</script>

<template>
  <div class="font-size-2xl text-level-first font-700">
    Login to Moan
  </div>
  <div class="font-size-sm text-level-third">
    Enter your email and password to login
  </div>
  <div class="divider" />
  <div class="mb-4">
    <div class="mb-2 font-size-4 text-level-second font-500">
      Email
    </div>
    <MaInput v-model="loginForm.email" placeholder="Enter your email" />
  </div>
  <div class="mb-4">
    <div class="mb-2 font-size-4 text-level-second font-500">
      Password
    </div>
    <MaInput v-model="loginForm.password" placeholder="Enter your password" />
  </div>
</template>
