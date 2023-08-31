import EntradaSaidaConfig from '@/models/EntradaSaidaConfig';

export class EntradaSaidaState {
  public valores!: EntradaSaidaConfig[];
}

export const state: EntradaSaidaState = Object.assign(new EntradaSaidaState(), {
  valores: [] as EntradaSaidaConfig[],
});



export default state;
