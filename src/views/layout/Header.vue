<script setup lang="ts">
import MaButton from '@/components/MaButton/index.vue'
import { GITHUB_PROFILE } from '@/constant'
</script>

<template>
  <div class="h-16 flex-between px-4">
    <div>left</div>
    <div class="flex-between gap-4">
      <a class="i-mdi-github font-size-2xl" :href="GITHUB_PROFILE" target="_blank" />
      <div>
        <div class="h-10 w-10 flex-center border-base rounded-full">
          s
        </div>
      </div>
      <RouterLink to="/dashboard">
        Backstage
      </RouterLink>
      <RouterLink to="/login">
        <MaButton rounded class="font-size-4!">
          Login
        </MaButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
