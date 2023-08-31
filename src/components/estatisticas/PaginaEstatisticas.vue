<template>
    <div>
        <v-row>
            <v-col :cols="qtdColsPorCard" class="card-estatistica">
                <card-estatisticas></card-estatisticas>
            </v-col>
            <v-col :cols="qtdColsPorCard" class="card-estatistica">
                <entrada-saida-card ></entrada-saida-card>
            </v-col>
        </v-row>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardEstatisticas from './CardEstatisticas.vue';
import { Constantes } from '@/Constantes/Constantes'
import EntradaSaidaCard from '../EntradaSaida/EntradaSaidaCard.vue';
import EntradaSaidaConfig from '@/models/EntradaSaidaConfig';
import EntradaSaidaModel from '@/models/EntradaSaidaModel';

@Component({ components: { CardEstatisticas,EntradaSaidaCard } })
export default class PaginaEstatisticas extends Vue {
    public qtdColsPorCard = Constantes.VALOR_COLS; //essa constante é para definir o tamanho do COL para dividir os graficos caso queria usar mais de um

}
</script>

<style>
.card-estatistica{
    padding: 30px;
}

</style>