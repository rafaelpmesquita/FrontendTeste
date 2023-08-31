import { Module } from 'vuex';
import { EntradaSaidaState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const entradaSaida: Module<EntradaSaidaState, RootState> = {
  actions,
  state,
  mutations,
  getters,
  namespaced: true,
};

export default entradaSaida;
