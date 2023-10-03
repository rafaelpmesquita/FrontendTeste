<template>
    <div>
        <DataTableBase :colunas="colunas" :variavel="variavel" />
        <!-- <v-row>
            <v-col :cols="4" class="card-estatistica">
                <card-estatisticas-bar type="bar"></card-estatisticas-bar>
            </v-col>

            <v-col :cols="4" class="card-estatistica">
                <card-estatisticas-bar type="line"></card-estatisticas-bar>
            </v-col>
            <v-col :cols="4" class="card-estatistica">
                <card-estatisticas-bar type="radar"></card-estatisticas-bar>
            </v-col>

        </v-row>
        <v-row>
            <v-col :cols="3" class="card-estatistica">
                <entrada-saida-card class="tam"></entrada-saida-card>
            </v-col>
            
            <v-col :cols="2">
                <icon-valor icon="mdi-currency-usd" textoTitulo="Saida Fixa" valor="2.000" textoMensagem="Valor saida mensal" cor="red"></icon-valor>

            </v-col>
            <v-col :cols="2">
              <icon-valor icon="mdi-currency-usd" textoTitulo="Entrada Fixa" valor="3.000" textoMensagem="Valor entrada mensal" cor="green"></icon-valor>
            </v-col>
            <v-col :cols="2" >
                <icon-valor icon="mdi-currency-usd" textoTitulo="Gastos variados" valor="500" textoMensagem="Gastos variados mensal" cor="yellow"></icon-valor>
              </v-col>
        </v-row> -->

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardEstatisticasBar from './CardEstatisticasBar.vue';
import { Constantes } from '@/Constantes/Constantes'
import EntradaSaidaCard from '../EntradaSaida/EntradaSaidaCard.vue';
import IconValor from '../IconValores/IconValor.vue';
import DataTableBase from '../base/DataTableBase.vue';

@Component({ components: { CardEstatisticasBar, EntradaSaidaCard, IconValor, DataTableBase } })
export default class PaginaEstatisticas extends Vue {
    public qtdColsPorCard = Constantes.VALOR_COLS; //essa constante é para definir o tamanho do COL para dividir os graficos caso queria usar mais de um
    // public colunas: string[] = ['Nome', 'Sexo', 'Idade'];
    public colunas: string[] = ['Entrada', 'Saida', 'Total','Data'];
    public variavel: any[] = [
        {
            entrada: 1000,
            saida: 800,
            total: 200,
            data: '2023-09-20',
        },
        {
            entrada: 1200,
            saida: 900,
            total: 300,
            data: '2023-09-21',
        },
        {
            entrada: 800,
            saida: 700,
            total: 100,
            data: '2023-09-22',
        },
        {
            entrada: 1500,
            saida: 1100,
            total: 400,
            data: '2023-09-23',
        },
    ];
}
</script>

<style>
.card-estatistica {
    padding: 30px;
}
</style>