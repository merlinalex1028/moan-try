<script setup lang="ts">
import type { ILoginInfo } from '@/types/login'
import Container from './Container.vue'

const info: ILoginInfo = {
  title: 'Create an account',
  description: 'Enter your email below to create your account',
  confirmButtonText: 'Create account',
  linkButtonText: 'Already have an account? Login'
}
</script>

<template>
  <Container :info />
</template>
