<template>
  <div>
    <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import VueApexCharts from 'vue-apexcharts'
import EstaticBarConfig from '@/models/EstaticBarConfig';
import { EstatisticasActionTypes } from '@/store/estatisticas/actions';
const space = namespace(StoreNamespaces.ESTATISTICAS);

@Component({ components: { apexchart: VueApexCharts } })
export default class Estatisticas extends Vue {

  @Prop() private labels!: string[];
  @Prop() private valores!: EstaticBarConfig[];
  @space.Action(
    EstatisticasActionTypes.BUSCAR_VALORES_LABELS,
  )
  public buscarValores!: () => Promise<void>;

    public options: any = {
    xaxis: {
      categories: [],
    },
    colors:[]
  };
  
  public series: any = [];
  private async mounted() {
    await this.buscarValores();
    let cores = [];
    for (let i = this.valores.length - 1; i >= 0; i--) {
      cores.push(this.valores[i].cor);
      this.series.push({
        name: this.valores[i].label,
        data: this.valores[i].valores,
      });
    }
    this.options.xaxis.categories = this.labels;
    console.log(this.options.xaxis.categories)
    this.options.colors = cores;
  }
}
</script>
