import { ActionTree } from 'vuex';
import { Container } from 'typescript-ioc';
import { LeadService } from '@/service/LeadService';
import LeadModel from '@/models/LeadModel';
import { LeadMutationTypes } from './mutations';
import { RootState } from '..';
import { LeadState } from './state';

export enum LeadActionTypes {
  GET_INVITED = 'GET_INVITED',
  GET_ACCEPTED = 'GET_ACCEPTED',
  UPDATE_STATUS = 'UPDATE_STATUS',
}

const actions: ActionTree<LeadState, RootState> = {
  async [LeadActionTypes.UPDATE_STATUS]({ commit }, request : {lead: LeadModel, endpoint:string}) {
    const service = Container.get(LeadService) as LeadService;
    await service.changeStatus(request.lead,request.endpoint);
  },

  async [LeadActionTypes.GET_INVITED]({ commit }, request: string) {
    const service = Container.get(LeadService) as LeadService;
    const response = await service.getInvited(request);
    commit(LeadMutationTypes.SET_INVITED, response);
  },

  async [LeadActionTypes.GET_ACCEPTED]({ commit }, request:string) {
    const service = Container.get(LeadService) as LeadService;
    const response = await service.getAccepted(request);
    commit(LeadMutationTypes.SET_ACCEPTED, response);
  },

};
export default actions;
