import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { LeadState } from './state';

export enum LeadGetterTypes {
  GET_INVITED = 'SET_INVITED',
  GET_ACCEPTED = 'SET_ACCEPTED',
}

const getters: GetterTree<LeadState, RootState> = {
  [LeadGetterTypes.GET_INVITED](state) {
    return state.leadInvited;
  },

  [LeadGetterTypes.GET_ACCEPTED](state) {
    return state.leadAccepted;
  },

};

export default getters;
