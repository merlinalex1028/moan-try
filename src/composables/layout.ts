import { reactive } from 'vue'

interface ILayoutState {
  activeMenuItem: string | null
}

const layoutState = reactive<ILayoutState>({
  activeMenuItem: null
})

export function useLayout() {
  const setActiveMenuItem = (item: string | null) => {
    layoutState.activeMenuItem = item
  }

  return {
    layoutState,
    setActiveMenuItem
  }
}
