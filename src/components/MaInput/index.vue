<script setup lang="ts">
import { useFocus } from '@/composables/focus'
import { useHover } from '@/composables/hover'
import { onMounted, ref } from 'vue'
import { defaultInputProps, type IInputProps, type IInputType } from '.'

const props = withDefaults(
  defineProps<IInputProps>(),
  defaultInputProps
)

const modelValue = defineModel()

const { isFocused, handleFocus, handleBlur } = useFocus()
const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

const type = ref<IInputType>('text')

function handleClearValue() {
  modelValue.value = ''
}

function handleSwitchPasswordMode() {
  type.value = type.value === 'text' ? 'password' : 'text'
}

onMounted(() => {
  if (props.showPassword) {
    type.value = 'password'
  }
})
</script>

<template>
  <div
    class="h-8 w-full flex-center border-base border-rounded-md px-2"
    :class="[isFocused() ? 'border-primary-400' : '']"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input
      v-model="modelValue"
      v-bind="$attrs"
      :type
      class="w-full outline-none"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div
      v-if="clearable && isHovered() && modelValue"
      class="i-material-symbols-cancel-outline-rounded ml-2 cursor-pointer color-level-fourth"
      @click="handleClearValue"
    />
    <div
      v-if="showPassword && isHovered() && modelValue"
      class="ml-2 cursor-pointer color-level-fourth"
      :class="type === 'text' ? 'i-material-symbols-visibility' : 'i-material-symbols-visibility-off'"
      @click="handleSwitchPasswordMode"
    />
  </div>
</template>
