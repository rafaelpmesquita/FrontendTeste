import { GetterTree } from 'vuex';
import { EntradaSaidaState } from './state';
import { RootState } from '@/store';

export enum EntradaSaidaGetterTypes {
  RESULTADO_VALORES = 'RESULTADO_VALORES',
}

const getters: GetterTree<EntradaSaidaState, RootState> = {
  [EntradaSaidaGetterTypes.RESULTADO_VALORES](state) {
    return state.valores;
  },
};

export default getters;
