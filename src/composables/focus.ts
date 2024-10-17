import { ref } from 'vue'

export function useFocus(name: string = 'default') {
  const focusStatus = ref(new Map<string, boolean>())

  function handleFocus() {
    focusStatus.value.set(name, true)
  }

  function handleBlur() {
    focusStatus.value.set(name, false)
  }

  function isFocused() {
    return focusStatus.value.get(name) || false
  }

  return {
    isFocused,
    handleFocus,
    handleBlur
  }
}
