import { components } from './components/index';
import './css/global.style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import { store } from '@/store/store'
import VueTheMask from 'vue-the-mask'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { iconsSvg } from './assets';
import VueGtag from 'vue-gtag';
import { componentsUI } from './UI';
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
componentsUI.forEach(component => {
    app.component(component.name, component)
})

iconsSvg.forEach(component => {
    app.component(component.name, component)
})

app
    .component('QuillEditor', QuillEditor)
    .use(VueGtag, {
        config: { id: 'AW-11432602863' }, // Замініть це значення на ваш ID Google Analytics
    }, router)
    .use(VueTheMask)
    .use(store)
    .use(router)
    .mount('#app')
