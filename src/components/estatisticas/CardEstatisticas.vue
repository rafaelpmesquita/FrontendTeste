<template>
    <div>
        <v-row>
            <v-col :cols="qtdColsPorCard">
                <v-card variant="outlined">
                    <estatisticas :labels="labels" :valores="valores"></estatisticas>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs'
import EstaticBarConfig from '@/models/EstaticBarConfig'
import { Constantes } from '@/Constantes/Constantes'
import Estatisticas from './Estatisticas.vue';
@Component({ components: { Estatisticas } })
export default class CardEstatisticas extends Vue {

    public qtdColsPorCard = Constantes.VALOR_COLS;
    public valores :EstaticBarConfig[] = [
        new EstaticBarConfig("Data",[40,30,50],["#432agb"]),
    ]
    public labels: string[] = ["teste"]

}
</script>