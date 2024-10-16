<script setup lang="ts">
import type { ILoginForm, ILoginInfo } from '@/types/login'
import MaButton from '@/components/MaButton/index.vue'
import MaInput from '@/components/MaInput/index.vue'
import { ref } from 'vue'

defineProps<{
  info: ILoginInfo
}>()

const form = ref<ILoginForm>({
  email: '',
  password: ''
})
</script>

<template>
  <div class="font-size-2xl text-level-first font-700">
    {{ info.title }}
  </div>
  <div class="font-size-sm text-level-third">
    {{ info.description }}
  </div>
  <div class="divider" />
  <div class="mb-4">
    <div class="mb-2 font-size-4 text-level-second font-500">
      Email
    </div>
    <MaInput v-model="form.email" placeholder="Enter your email" />
  </div>
  <div class="mb-4">
    <div class="mb-2 font-size-4 text-level-second font-500">
      Password
    </div>
    <MaInput v-model="form.password" placeholder="Enter your password" show-password />
  </div>
  <MaButton class="mb-4 w-full">
    {{ info.confirmButtonText }}
  </MaButton>
  <MaButton class="w-full">
    {{ info.linkButtonText }}
  </MaButton>
</template>
