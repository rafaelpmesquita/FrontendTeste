<template>  
    <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs'
import  EstaticBarConfig  from '@/models/EstaticBarConfig'

@Component({ components: { Bar } })
export default class Estatisticas extends Vue {
 
  @Prop()
  private labels!: string[];

  @Prop()
  private valores!: EstaticBarConfig[];

  public data ?: any;

  @Watch("valores")
  public beforeCreate(){
    debugger;
    let dataset = [];
    for(let i = this.valores.length; i != 0; i--){
      dataset.push({
        label: this.valores[i].label,
        backgroundColor:this.valores[i].cor,
        data: this.valores[i].valores
      })
    }
    this.data = {
      labels: this.labels,
      datasets: dataset
    }
  }
    public options=  {
        responsive: true
      }
}
</script>