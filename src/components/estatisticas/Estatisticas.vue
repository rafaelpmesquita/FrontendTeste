<template>  
    <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs'


@Component({ components: { Bar } })
export default class Estatisticas extends Vue {
 
    public data =  {
        labels: [ 'January', 'February', 'March','alo'],
        datasets: [
          {
            label: 'Data',
            backgroundColor: ['#f87979', '#58D68D', '#3498DB','#000000'],
            data: [40, 20, 12,30]
          },  {
            label: 'Data',
            backgroundColor: ['#f87979', '#58D68D', '#3498DB','#000000'],
            data: [40, 20, 12,30]
          },


        ]
    }
    public options=  {
        responsive: true
      }
}
</script>