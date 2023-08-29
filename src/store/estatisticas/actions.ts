import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { Container } from 'typescript-ioc';
import { EstatisticaState } from './state';
import { EstatisticasService } from '@/service/EstatisticasService';
import { EstatisticasMutationTypes } from './mutations';

export enum EstatisticasActionTypes {
  BUSCAR_VALORES_LABELS = 'BUSCAR_VALORES_LABELS',
}

const actions: ActionTree<EstatisticaState, RootState> = {
  async [EstatisticasActionTypes.BUSCAR_VALORES_LABELS](
    { commit, state },
    request: string,
  ) {
    const service = Container.get(EstatisticasService);
    try {
      const response = await service.buscarDataLabel();
      commit(EstatisticasMutationTypes.ADD_VALORES_ESTATISTICAS,response.valores)
      commit(EstatisticasMutationTypes.ADD_LABELS,response.labels)
    } catch (error) {
      console.log(getErrorMessage(error))
    }
  },
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

export default actions;
