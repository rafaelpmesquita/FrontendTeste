<template>
    <div>
        <v-card variant="outlined">
            <v-card-text>
                <div class="card-estatistica">
                    <estatisticas-bar :labels="labels" :valores="valores" :type="type"></estatisticas-bar>
                </div>
            <v-divider>
            </v-divider>
                <br>
                <h1>Teste</h1>
                <p>Grafico de teste</p>
            </v-card-text>

        </v-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EstaticBarConfig from '@/models/EstaticBarConfig'
import EstatisticasBar from './EstatisticasBar.vue';
import { namespace } from 'vuex-class';
import { StoreNamespaces } from '../../store/namespaces';
import { EstatisticasActionTypes } from '@/store/estatisticas/actions';
import { EstatisticasGetterTypes } from '@/store/estatisticas/getters';

const space = namespace(StoreNamespaces.ESTATISTICAS);
@Component({ components: { EstatisticasBar } })
export default class CardEstatisticasBar extends Vue {

    @Prop() public type!:string;

    @space.Getter(EstatisticasGetterTypes.RESULTADO_VALORES)
    public valores!: EstaticBarConfig[];

    @space.Getter(EstatisticasGetterTypes.VALOR_LABELS)
    public labels!: any[];

}
</script>
<style>
.card-estatistica{
    padding: 30px;
}

</style>