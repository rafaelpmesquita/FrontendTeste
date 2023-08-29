import { MutationTree } from 'vuex';
import { EstatisticaState } from './state';
import EstaticBarConfig from '@/models/EstaticBarConfig';

export enum EstatisticasMutationTypes {
  ADD_VALORES_ESTATISTICAS = 'ADD_VALORES_ESTATISTICAS',
  ADD_LABELS = 'ADD_LABELS',

}

const mutations: MutationTree<EstatisticaState> = {
  [EstatisticasMutationTypes.ADD_VALORES_ESTATISTICAS](state: EstatisticaState, valores: EstaticBarConfig[]) {
    state.valores = valores;
  },
  [EstatisticasMutationTypes.ADD_LABELS](state: EstatisticaState, labels: string) {
    state.labels = labels;
  },

};
export default mutations;
