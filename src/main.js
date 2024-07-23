import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(VueGoogleMaps, {
    load:{
        key: '',
    }
});

// Optionally install the BootstrapVue icon components plugin
app.use(store).use(router).mount('#app')


