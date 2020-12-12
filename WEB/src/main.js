import Vue from 'vue'
import AxiosPlugin from 'vue-axios-cors';

import Layout from './components/_layouts'
import vuetify from './plugins/vuetify';

Vue.use(AxiosPlugin)
Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(Layout)
}).$mount('#app')