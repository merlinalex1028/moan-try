export const menuList = [
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/backstage/dashboard'
      }
    ]
  },
  {
    label: 'Display Content',
    items: [
      {
        label: 'Emoji',
        icon: 'pi pi-fw pi-image',
        to: '/display-content/emoji'
      }
    ]
  },
  {
    label: 'WEB API',
    items: [
      {
        label: 'CustomEvent',
        icon: 'pi pi-fw pi-send',
        to: '/webapi/custom'
      }
    ]
  },
  {
    label: 'Programming Techniques',
    items: [
      {
        label: 'BetterCode',
        icon: 'pi pi-fw pi-code',
        items: [
          {
            label: 'collection',
            to: '/programming-techniques/better-code/index'
          },
          {
            label: 'async/await',
            to: '/programming-techniques/better-code/async-await'
          },
          {
            label: 'error handling',
            to: '/programming-techniques/better-code/error-handling'
          }
        ]
      }
    ]
  },
  {
    label: 'Build Tool',
    items: [
      {
        label: 'Vite Basic',
        icon: 'i-tabler-brand-vite',
        to: '/build-tool/vite-basic'
      }
    ]
  },
  {
    label: 'Docker',
    items: [
      {
        label: 'Basic',
        icon: 'i-tabler-brand-docker',
        to: '/docker/basic'
      }
    ]
  },
  {
    label: 'Vue',
    items: [
      {
        label: 'Reactivity Principle',
        icon: 'i-mdi-vuejs',
        to: '/vue/reactivity-principle'
      }
    ]
  }
]
