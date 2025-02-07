<script setup lang="ts">
import type { Tables } from '../../../database/types'
import { supabase } from '@/lib/supabase-client'
import { ref } from 'vue'

const projects = ref<Tables<'projects'>[] | null>()

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.error('error', error)
  }

  projects.value = data
})()
</script>

<template>
  <div>
    projects:

    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>
