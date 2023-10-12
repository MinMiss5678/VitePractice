import './assets/main.css'
import router from './router/index'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type {PiniaPluginContext} from 'pinia'
import App from './App.vue'

export function myPiniaPlugin(context: PiniaPluginContext) {
}
const pinia = createPinia();
pinia.use(myPiniaPlugin);
pinia.use(({ store }) => {
    store.hello = 'world'
});
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');