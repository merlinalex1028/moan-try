<script setup lang="ts">
import type { IButtonProps } from '.'
import { defaultButtonProps } from '.'

withDefaults(
  defineProps<IButtonProps>(),
  defaultButtonProps
)

const backgroundTheme = {
  primary: 'bg-primary-400',
  success: 'bg-success-400',
  error: 'bg-error-400',
  warning: 'bg-warning-400'
}

const hoverBackgroundTheme = {
  primary: 'hover:bg-primary-600',
  success: 'hover:bg-success-600',
  error: 'hover:bg-error-600',
  warning: 'hover:bg-warning-600'
}

const borderTheme = {
  primary: 'border-primary-400',
  success: 'border-success-400',
  error: 'border-error-400',
  warning: 'border-warning-400'
}

const hoverBorderTheme = {
  primary: 'hover:border-primary-600',
  success: 'hover:border-success-600',
  error: 'hover:border-error-600',
  warning: 'hover:border-warning-600'
}

const textTheme = {
  primary: 'text-primary-400',
  success: 'text-success-400',
  error: 'text-error-400',
  warning: 'text-warning-400'
}

const hoverTextTheme = {
  primary: 'hover:text-primary-600',
  success: 'hover:text-success-600',
  error: 'hover:text-error-600',
  warning: 'hover:text-warning-600'
}
</script>

<template>
  <button
    v-bind="$attrs"
    class="border-base px-4 py-2 font-size-sm"
    :class="[
      plain ? 'bg-white' : backgroundTheme[type],
      plain ? 'hover:bg-white' : hoverBackgroundTheme[type],
      plain ? textTheme[type] : 'text-white',
      plain ? hoverTextTheme[type] : 'hover:text-white',
      borderTheme[type],
      hoverBorderTheme[type],
      rounded ? 'rounded-full' : 'rounded'
    ]"
  >
    <slot />
  </button>
</template>
