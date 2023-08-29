import Vue from 'vue';
import Vuex from 'vuex';
import estatisticas from './estatisticas';



Vue.use(Vuex);

export class RootState {}

const store = new Vuex.Store<RootState>({
  modules: {
    estatisticas
  },
});

Object.assign(window, { $store: store });

export default store;
