import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BaseLayout from '@/layout/BaseLayout.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/teste',
    name: 'teste',
    component: BaseLayout,
  },

]

const router = new VueRouter({
  routes
})

export default router
