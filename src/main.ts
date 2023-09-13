import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { LoaderPlugin } from './commom/loader'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(LoaderPlugin);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
