import { Module } from 'vuex';
import {  LeadState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const lead: Module<LeadState, RootState> = {
  actions,
  state,
  mutations,
  getters,
  namespaced: true,
};

export default lead;
