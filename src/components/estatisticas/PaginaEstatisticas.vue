<template>
    <div>
        <v-row>
            <v-col :cols="qtdColsPorCard">
                <card-estatisticas></card-estatisticas>
            </v-col>
            <v-col :cols="qtdColsPorCard">
                <card-estatisticas></card-estatisticas>
            </v-col>
        </v-row>
        <v-row>
            <v-col :cols="qtdColsPorCard">
                <card-estatisticas></card-estatisticas>
            </v-col>
            <v-col :cols="qtdColsPorCard">
                <card-estatisticas></card-estatisticas>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardEstatisticas from './CardEstatisticas.vue';
import { Constantes } from '@/Constantes/Constantes'

@Component({ components: { CardEstatisticas } })
export default class PaginaEstatisticas extends Vue {
    public qtdColsPorCard = Constantes.VALOR_COLS; //essa constante é para definir o tamanho do COL para dividir os graficos caso queria usar mais de um
}
</script>