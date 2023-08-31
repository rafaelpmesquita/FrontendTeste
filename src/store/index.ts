import Vue from 'vue';
import Vuex from 'vuex';
import estatisticas from './estatisticas';
import entradaSaida from './entradaSaida';



Vue.use(Vuex);

export class RootState {}

const store = new Vuex.Store<RootState>({
  modules: {
    estatisticas,
    entradaSaida
  },
});

Object.assign(window, { $store: store });

export default store;
