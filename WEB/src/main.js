import Vue from 'vue'
import vuetify from './plugins/vuetify'
import AxiosPlugin from 'vue-axios-cors'
import Core from './components/core'
import store from './store'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify/lib/framework'

Vue.use(AxiosPlugin);
// Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
    store,
    vuetify,
    router,
    render: h => h(Core)
}).$mount('#app')