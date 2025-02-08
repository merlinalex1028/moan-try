<script setup lang="ts">
import type { Tables } from '../../../database/types'
import { supabase } from '@/lib/supabase-client'
import { computed, ref } from 'vue'

type Tasks = Tables<'tasks'>

const taskKeys = ref([] as string[])

const tasks = ref<Tasks[] | null>()

const tableColumns = computed(() => {
  return taskKeys.value?.map(key => ({
    field: key,
    header: key.charAt(0).toUpperCase() + key.slice(1)
  })) || []
})

async function getTasks() {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error('error', error)
  }

  tasks.value = data
  taskKeys.value = Object.keys(data![0])
}

await getTasks()
</script>

<template>
  <div>
    <div class="text-lg text-black font-bold">
      Tasks
    </div>
    <DataTable
      v-if="tasks && tasks.length"
      :value="tasks"
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
