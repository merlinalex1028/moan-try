import { ref } from 'vue'

export function useHover(name: string = 'default') {
  const hoverStates = ref(new Map<string, boolean>())

  function handleMouseEnter() {
    hoverStates.value.set(name, true)
  }

  function handleMouseLeave() {
    hoverStates.value.set(name, false)
  }

  function isHovered() {
    return hoverStates.value.get(name) || false
  }

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  }
}
