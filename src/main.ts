import './css/global.style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import { store } from '@/store/store'
import VueTheMask from 'vue-the-mask'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const app = createApp(App)



app
    .component('QuillEditor', QuillEditor)
    .use(VueTheMask)
    .use(store)
    .use(router)
    .mount('#app')
