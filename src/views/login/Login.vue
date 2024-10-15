<script setup lang="ts">
import type { ILoginInfo } from '@/types/login'
import Container from './Container.vue'

const info: ILoginInfo = {
  title: 'Login to Moan',
  description: 'Enter your email and password to login',
  confirmButtonText: 'Login',
  linkButtonText: 'Don\'t have an account? Register'
}
</script>

<template>
  <Container :info />
</template>
