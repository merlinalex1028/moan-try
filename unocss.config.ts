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
      primary: {
        50: '#eef5ff',
        100: '#dae7ff',
        200: '#bdd6ff',
        300: '#90bdff',
        400: '#4b8eff', // default
        500: '#3572fc',
        600: '#1f51f1',
        700: '#173cde',
        800: '#1932b4',
        900: '#1a2fbe'
      },
      success: {
        50: '#ecfdf4',
        100: '#d1fae3',
        200: '#a8f2cc',
        300: '#6fe6b1',
        400: '#2dc888', // default
        500: '#11b879',
        600: '#069562',
        700: '#057752',
        800: '#075e42',
        900: '#074d38'
      },
      error: {
        50: '#fef2f2',
        100: '#fde3e3',
        200: '#fdcbcb',
        300: '#faa7a7',
        400: '#f56c6c', // default
        500: '#ec4747',
        600: '#d92929',
        700: '#b61f1f',
        800: '#971d1d',
        900: '#7d1f1f'
      },
      warning: {
        50: '#fef9ec',
        100: '#fdedc8',
        200: '#fad98d',
        300: '#f7c152',
        400: '#f5a623', // default
        500: '#ef8611',
        600: '#d3640c',
        700: '#af440e',
        800: '#8f3511',
        900: '#752c12'
      },
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
