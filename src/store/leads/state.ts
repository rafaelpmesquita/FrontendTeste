import LeadModel from '@/models/LeadModel';

export class LeadState {
  leadInvited!:LeadModel[];
  leadAccepted!:LeadModel[];
}

export const state: LeadState = Object.assign(new LeadState(), {
  leadInvited: [],
  leadAccepted: [],
});

export default state;
