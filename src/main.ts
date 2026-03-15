import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vScrollEnd from './directives/vScrollEnd'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App)
  .directive('scroll-end', vScrollEnd)
  .use(VueQueryPlugin)
  .mount('#app')
