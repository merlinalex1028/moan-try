<script setup lang="ts">
import MaTag from '@/components/MaTag/index.vue'
import { useRouter } from 'vue-router'

const codeList = [
  {
    label: 'async/await',
    to: '/programming-techniques/better-code/async-await'
  },
  {
    label: 'error handling',
    to: '/programming-techniques/better-code/error-handling'
  }
]

const router = useRouter()

function goto(to: string) {
  router.push(to)
}
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <MaTag
      v-for="(item, index) in codeList"
      :key="index"
      :text="item.label"
      class="cursor-pointer"
      @click="goto(item.to)"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
