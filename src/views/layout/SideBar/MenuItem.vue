<script setup lang="ts">
import type { IMenuItem, IMenuItemProps } from '@/types/sidebar'
import { useLayout } from '@/composables/layout'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<IMenuItemProps>(), {
  index: 0,
  root: true,
  parentItemKey: null
})

const route = useRoute()

const { layoutState, setActiveMenuItem } = useLayout()

const isActiveMenu = ref(false)
const itemKey = ref<string | null>(null)

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? `${props.parentItemKey}-${props.index}` : String(props.index)

  const activeItem = layoutState.activeMenuItem

  isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(`${itemKey.value}-`) : false
})

watch(
  () => layoutState.activeMenuItem,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || newVal!.startsWith(`${itemKey.value}-`)
  }
)

function itemClick(item: IMenuItem) {
  const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey.value) : itemKey.value

  setActiveMenuItem(foundItemKey)
}

function checkActiveRoute(item: IMenuItem) {
  return route.path === item.to
}
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <div v-if="root" class="layout-menuitem-root-text">
      {{ item.label }}
    </div>
    <a
      v-if="!item.to || item.items"
      :href="item.url"
      target="_blank"
      tabindex="0"
      @click="itemClick(item)"
    >
      <i :class="item.icon" class="layout-menuitem-icon" />
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i v-if="item.items" class="layout-submenu-toggler pi pi-fw pi-angle-down" />
    </a>
    <router-link
      v-if="item.to && !item.items"
      :class="[{ 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
      @click="itemClick(item)"
    >
      <i :class="item.icon" class="layout-menuitem-icon" />
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler" />
    </router-link>
    <Transition v-if="item.items" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
        <MenuItem
          v-for="(child, i) in item.items"
          :key="child.label + i"
          :index="i"
          :item="child"
          :parent-item-key="itemKey"
          :root="false"
        />
      </ul>
    </Transition>
  </li>
</template>

<style scoped lang="scss">

</style>
