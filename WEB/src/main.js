import Vue from 'vue'
import vuetify from './plugins/vuetify'
import AxiosPlugin from 'vue-axios-cors'
import Layout from './components/_layouts'
import store from './store'

Vue.use(AxiosPlugin)
Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    render: h => h(Layout),
}).$mount('#app')