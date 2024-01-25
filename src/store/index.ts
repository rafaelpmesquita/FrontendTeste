import Vue from 'vue';
import Vuex from 'vuex';
import lead from './leads';

Vue.use(Vuex);

export class RootState {}

const store = new Vuex.Store<RootState>({
  modules: {
    lead
  },
});

Object.assign(window, { $store: store });

export default store;
