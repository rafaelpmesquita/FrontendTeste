import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import teste from '../components/teste.vue'
import PaginaEstatisticas from '../components/estatisticas/Estatisticas.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/teste',
    name: 'teste',
    component: teste,
  },
  {
    path: '/estatisticas',
    name: 'estatisticas',
    component: PaginaEstatisticas,
  },
]

const router = new VueRouter({
  routes
})

export default router
