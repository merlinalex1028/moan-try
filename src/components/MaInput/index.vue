<script setup lang="ts">
import { useFocus } from '@/composables/focus'
import { useHover } from '@/composables/hover'

const modelValue = defineModel()

const { isFocused, handleFocus, handleBlur } = useFocus()
const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

function handleClearValue() {
  modelValue.value = ''
}
</script>

<template>
  <div class="h-8 w-full flex-center border-base border-rounded-md px-2" :class="[isFocused ? 'border-primary' : '']" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <input v-model="modelValue" v-bind="$attrs" class="w-full outline-none" @focus="handleFocus" @blur="handleBlur">
    <div v-if="isHovered && modelValue" class="i-material-symbols-cancel-outline-rounded ml-2 cursor-pointer color-level-fourth" @click="handleClearValue" />
  </div>
</template>
