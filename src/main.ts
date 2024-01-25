import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BaseLayout from './layout/BaseLayout.vue'

Vue.config.productionTip = false
Vue.component('BaseLayout', BaseLayout)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
