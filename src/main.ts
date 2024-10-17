import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

import '@unocss/reset/tailwind.css'
import '@shikijs/twoslash/style-rich.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'

import 'uno.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
