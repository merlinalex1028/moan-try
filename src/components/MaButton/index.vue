<script setup lang="ts">
import type { IButtonProps } from '.'
import { defaultButtonProps } from '.'
import { backgroundTheme, borderTheme, textTheme } from './theme'

withDefaults(
  defineProps<IButtonProps>(),
  defaultButtonProps
)
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
