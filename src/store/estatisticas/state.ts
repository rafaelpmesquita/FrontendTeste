import EstaticBarConfig from '@/models/EstaticBarConfig';

export class EstatisticaState {
  public valores!: EstaticBarConfig[];
  public labels!: any[];
}

export const state: EstatisticaState = Object.assign(new EstatisticaState(), {
  valores: [] as EstaticBarConfig[],
  labels: [],
});



export default state;
