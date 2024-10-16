import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  shortcuts: [{
    'border-base': 'border border-level-fifth border-solid',
    'flex-base': 'flex items-center',
    'flex-center': 'flex-base justify-center',
    'flex-between': 'flex-base justify-between',
    'divider': 'border-t border-level-fifth my-sm'
  }],
  theme: {
    colors: {
      primary: '#4b8eff',
      hover: {
        primary: '#699ff9'
      },
      success: '#2dc888',
      error: '#f56c6c',
      warning: '#f5a623',
      level: {
        first: '#262a30',
        second: '#5c626b',
        third: '#959ba3',
        fourth: '#bfbfbf',
        fifth: '#e1e1e1'
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom'
      }
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script'
      }
    })
  ],
  transformers: [
    transformerDirectives()
  ],
  safelist: [
    'i-ri-menu-2-fill'
  ]
})
