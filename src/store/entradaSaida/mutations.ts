import { MutationTree } from 'vuex';
import { EntradaSaidaState } from './state';
import EntradaSaidaConfig from '@/models/EntradaSaidaConfig';

export enum EntradaSaidaMutationTypes {
  ADD_VALORES = 'ADD_VALORES',
}

const mutations: MutationTree<EntradaSaidaState> = {
  [EntradaSaidaMutationTypes.ADD_VALORES](state: EntradaSaidaState, valores: EntradaSaidaConfig[]) {
      state.valores = valores;
  },
 

};
export default mutations;
