<template>  
  <Bar  v-if="chartData!= undefined && options != undefined" :data="chartData" :options="options" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs';
import EstaticBarConfig from '@/models/EstaticBarConfig';
import { EstatisticasActionTypes } from '@/store/estatisticas/actions';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
const space = namespace(StoreNamespaces.ESTATISTICAS);

@Component({ components: { Bar } })
export default class Estatisticas extends Vue {

@Prop() private labels!: string[];
@Prop() private valores!: EstaticBarConfig[];
@space.Action(
        EstatisticasActionTypes.BUSCAR_VALORES_LABELS,  
    )
    public buscarValores!: () => Promise<void>;
      
public chartData?: any = undefined;
public options = {
  responsive: true
};

private data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      }
    };
  }

private async mounted() {
  await this.buscarValores();
  let dataset = [];
  for (let i = this.valores.length - 1; i >= 0; i--) {
    dataset.push({
      label: this.valores[i].label,
      backgroundColor: this.valores[i].cor,
      data: this.valores[i].valores
    });
  }

  this.chartData = {
    labels: this.labels,
    datasets: dataset
  };
}
}
</script>
