import './assets/main.css'
import "./style.css"
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
// Default theme
import '@splidejs/vue-splide/css';
import 'animate.css';

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueSplide from '@splidejs/vue-splide';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide)

app.mount('#app')
