import Vue from 'vue'
import vuetify from './plugins/vuetify'
import AxiosPlugin from 'vue-axios-cors'
import App from './components/app'
import store from './store'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(AxiosPlugin);
Vue.config.productionTip = false;

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')