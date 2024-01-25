import { MutationTree } from 'vuex';
import state, { LeadState } from './state';
import LeadModel from '@/models/LeadModel';

export enum LeadMutationTypes {
    SET_INVITED = 'SET_INVITED',
    SET_ACCEPTED = 'SET_ACCEPTED',
}

const mutations: MutationTree<LeadState> = {
    [LeadMutationTypes.SET_INVITED](state: LeadState, payload: LeadModel[]) {
        state.leadInvited = payload;
    },

    [LeadMutationTypes.SET_ACCEPTED](state: LeadState, payload: LeadModel[]) {
        state.leadAccepted = payload;
    },
};



export default mutations;
