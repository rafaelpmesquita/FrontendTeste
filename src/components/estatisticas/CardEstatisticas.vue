<template>
    <div>
        <v-card variant="outlined">
            <estatisticas :labels="labels" :valores="valores"></estatisticas>
        </v-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EstaticBarConfig from '@/models/EstaticBarConfig'
import Estatisticas from './Estatisticas.vue';
import { namespace } from 'vuex-class';
import { StoreNamespaces } from '../../store/namespaces';
import { EstatisticasActionTypes } from '@/store/estatisticas/actions';
import { EstatisticasGetterTypes } from '@/store/estatisticas/getters';

const space = namespace(StoreNamespaces.ESTATISTICAS);
@Component({ components: { Estatisticas } })
export default class CardEstatisticas extends Vue {
    @space.Action(
        EstatisticasActionTypes.BUSCAR_VALORES_LABELS,
    )
    public buscarValores!: () => Promise<void>;

    @space.Getter(EstatisticasGetterTypes.RESULTADO_VALORES)
    public valores!: EstaticBarConfig[];

    @space.Getter(EstatisticasGetterTypes.VALOR_LABELS)
    public labels!: EstaticBarConfig[];

    async onMounted() {
        await this.buscarValores();
    }

}
</script>