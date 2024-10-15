<script setup lang="ts">
import type { ILogin } from '@/types/login'
import MaInput from '@/components/MaInput/index.vue'
import { ref } from 'vue'

const RegisterForm = ref<ILogin>({
  email: '',
  password: ''
})
</script>

<template>
  <div class="font-size-2xl color-black font-700">
    Create an account
  </div>
  <div class="font-size-sm color-black/40">
    Enter your email below to create your account
  </div>
  <div class="divider" />
  <div class="mb-4">
    <div class="mb-2 font-size-4 color-black/70 font-500">
      Email
    </div>
    <MaInput v-model="RegisterForm.email" placeholder="Enter your email" />
  </div>
  <div class="mb-4">
    <div class="mb-2 font-size-4 color-black/70 font-500">
      Password
    </div>
    <MaInput v-model="RegisterForm.password" placeholder="Enter your password" />
  </div>
</template>
