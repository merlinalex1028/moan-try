export interface IMenuItem {
  label: string // name of the menu item
  icon?: string // icon class of the menu item
  to?: string // route path of the menu item
  url?: string // external link of the menu item
  items?: IMenuItem[] // submenus
}

export interface IMenuItemProps {
  item: IMenuItem
  index: number
  root?: boolean
  parentItemKey?: string | null
}
