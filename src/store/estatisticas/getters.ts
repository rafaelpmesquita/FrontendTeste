import { GetterTree } from 'vuex';
import { EstatisticaState } from './state';
import { RootState } from '@/store';

export enum EstatisticasGetterTypes {
  RESULTADO_VALORES = 'RESULTADO_VALORES',
  VALOR_LABELS = 'VALOR_LABELS',
}

const getters: GetterTree<EstatisticaState, RootState> = {
  [EstatisticasGetterTypes.RESULTADO_VALORES](state) {
    return state.valores;
  },
  [EstatisticasGetterTypes.VALOR_LABELS](state) {
    return state.labels;
  },
};

export default getters;
