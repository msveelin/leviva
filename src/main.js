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

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// toasts
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";

const options = {
  position: "top-right",
  timeout: 2032,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.45,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  rtl: false
}

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide)
app.use(vuetify)
app.use(Toast, options)

app.component('QuillEditor', QuillEditor)

app.mount('#app')
