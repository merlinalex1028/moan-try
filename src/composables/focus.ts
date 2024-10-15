import { ref } from 'vue'

export function useFocus() {
  const isFocused = ref(false)

  function handleFocus() {
    isFocused.value = true
  }

  function handleBlur() {
    isFocused.value = false
  }

  return {
    isFocused,
    handleFocus,
    handleBlur
  }
}
