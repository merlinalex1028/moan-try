import { ref } from 'vue'

export function useHover() {
  const isHovered = ref(false)

  function handleMouseEnter() {
    isHovered.value = true
  }

  function handleMouseLeave() {
    isHovered.value = false
  }

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  }
}
