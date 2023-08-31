import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { Container } from 'typescript-ioc';
import { EntradaSaidaService } from '@/service/EntradaSaidaService';
import { EntradaSaidaState } from './state';
import { EntradaSaidaMutationTypes } from './mutations';
import EntradaSaidaModel from '@/models/EntradaSaidaModel';

export enum EntradaSaidaActionTypes {
  BUSCAR_VALORES = 'BUSCAR_VALORES',
  ADICIONAR_VALORES = 'INSERIR_ENTRADA_SAIDA'
}

const actions: ActionTree<EntradaSaidaState, RootState> = {
  async [EntradaSaidaActionTypes.BUSCAR_VALORES](
    { commit, state },
  ) {
    const service = Container.get(EntradaSaidaService);
    try {
      const response = await service.buscarValores();
      commit(EntradaSaidaMutationTypes.ADD_VALORES, response)
    } catch (error) {
      console.log(getErrorMessage(error))
    }
  },
  async [EntradaSaidaActionTypes.ADICIONAR_VALORES](
    { commit, state },
    request: EntradaSaidaModel,
  ) {
    const service = Container.get(EntradaSaidaService);
    try {
      await service.adicionarValor(request);
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
