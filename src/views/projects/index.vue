<script setup lang="ts">
import type { Tables } from '../../../database/types'
import { supabase } from '@/lib/supabase-client'
import { computed, ref } from 'vue'

type Projects = Tables<'projects'>

const projectsKeys = ref([] as string[])

const projects = ref<Projects[] | null>()

const tableColumns = computed(() => {
  return projectsKeys.value?.map(key => ({
    field: key,
    header: key.charAt(0).toUpperCase() + key.slice(1)
  })) || []
})

async function getProjects() {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.error('error', error)
  }

  projects.value = data
  projectsKeys.value = Object.keys(data![0])
}

await getProjects()
</script>

<template>
  <div>
    <div class="text-lg text-black font-bold">
      Projects
    </div>
    <DataTable
      v-if="projects && projects.length"
      :value="projects"
      :rows="5"
      paginator
      show-gridlines
    >
      <Column
        v-for="col of tableColumns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />
    </DataTable>
  </div>
</template>
