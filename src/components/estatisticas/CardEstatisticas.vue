<template>
    <div>
        <v-card variant="outlined">
            <estatisticas :labels="labels" :valores="valores"></estatisticas>
        </v-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs'
import EstaticBarConfig from '@/models/EstaticBarConfig'
import Estatisticas from './Estatisticas.vue';
@Component({ components: { Estatisticas } })
export default class CardEstatisticas extends Vue {

    //isso aq terá q vir do store deixei fixo mas dps é so criar store e requisição
    public valores: EstaticBarConfig[] = [
        new EstaticBarConfig("Data", [40, 30, 50], ["#fff312"]),
        new EstaticBarConfig("Data", [30, 10, 20], ["#ffg772"]),
    ]
    public labels: string[] = ["teste", "teste1"]
}
</script>