<script setup lang="ts">
import MaButton from '@/components/MaButton/index.vue'
import { PROJECT_GITHUB_PAGE } from '@/constant'
import { EHeaderSource } from '@/enums/layout'

defineProps<{
  source: EHeaderSource
}>()
</script>

<template>
  <div
    class="h-16 w-full flex-between px-4"
    :class="[source === EHeaderSource.backstage ? 'fixed border-b border-b-gray/20' : '']"
  >
    <div>left</div>
    <div class="flex-between gap-8">
      <div class="group relative">
        <div class="h-10 w-10 flex-center cursor-default overflow-hidden border border-transparent rounded-full">
          <img src="https://s2.loli.net/2024/10/17/kmixNUPR8r2d1Vp.jpg">
        </div>
        <div class="absolute left-1/2 hidden w-28 transform group-hover:block -translate-x-1/2">
          <div class="h-2 color-transparent" />
          <div class="flex flex-col gap-2 bg-transparent">
            <MaButton rounded class="w-full">
              User Info
            </MaButton>
            <RouterLink to="/backstage/dashboard">
              <MaButton rounded class="w-full">
                Backstage
              </MaButton>
            </RouterLink>
            <MaButton rounded class="w-full">
              Logout
            </MaButton>
          </div>
        </div>
      </div>
      <RouterLink to="/login">
        <MaButton rounded class="font-size-4!">
          Login
        </MaButton>
      </RouterLink>
      <a class="i-mdi-github font-size-4xl" :href="PROJECT_GITHUB_PAGE" target="_blank" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
