<script setup lang="ts">
import type { Tables } from '../../../database/types'
import { supabase } from '@/lib/supabase-client'
import { ref } from 'vue'

const tasks = ref<Tables<'tasks'>[] | null>()

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error('error', error)
  }

  tasks.value = data
})()
</script>

<template>
  <div>
    tasks:

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
