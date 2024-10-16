<script setup lang="ts">
import MaButton from '@/components/MaButton/index.vue'
import { GITHUB_PROFILE } from '@/constant'
</script>

<template>
  <div class="flex-between h-16 px-4">
    <div>left</div>
    <div class="flex-between gap-4">
      <a class="i-mdi-github font-size-2xl" :href="GITHUB_PROFILE" target="_blank" />
      <div>user</div>
      <RouterLink to="/login">
        <MaButton rounded class="font-size-4!">
          Login
        </MaButton>
      </RouterLink>
      <div>dashboard</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
