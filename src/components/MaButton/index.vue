<script setup lang="ts">
import type { IButtonProps } from '.'
import { defaultButtonProps } from '.'

withDefaults(
  defineProps<IButtonProps>(),
  defaultButtonProps
)

const backgroundTheme = {
  primary: 'bg-primary',
  success: 'bg-success',
  error: 'bg-error',
  warning: 'bg-warning'
}

const borderTheme = {
  primary: 'border-primary',
  success: 'border-success',
  error: 'border-error',
  warning: 'border-warning'
}

const textTheme = {
  primary: 'text-primary',
  success: 'text-success',
  error: 'text-error',
  warning: 'text-warning'
}
</script>

<template>
  <button
    v-bind="$attrs"
    class="border-base rounded px-4 py-2 font-size-sm"
    :class="[
      plain ? 'bg-white' : backgroundTheme[type],
      borderTheme[type],
      plain ? textTheme[type] : 'text-white'
    ]"
  >
    <slot />
  </button>
</template>
