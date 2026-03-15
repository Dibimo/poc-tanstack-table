import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vScrollEnd from './directives/vScrollEnd'

createApp(App)
  .directive('scroll-end', vScrollEnd)
  .mount('#app')
