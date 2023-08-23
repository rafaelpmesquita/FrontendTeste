<template>  
  <Bar :data="chartData" :options="options" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs';
import EstaticBarConfig from '@/models/EstaticBarConfig';

@Component({ components: { Bar } })
export default class Estatisticas extends Vue {

@Prop() private labels!: string[];
@Prop() private valores!: EstaticBarConfig[];

public chartData?: any;
public options = {
  responsive: true
};


private beforeMount() {
  let dataset = [];
  console.log(this.valores)
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
