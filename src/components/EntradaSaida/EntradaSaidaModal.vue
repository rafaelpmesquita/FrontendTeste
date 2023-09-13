<template>
    <v-card>
        <v-card-title class="text-h5 font-weight-bold d-flex justify-space-between texto-padrao">Adicionar entrada/saida
            <v-btn icon color="gray" @click="fecharModal"><v-icon large color="black darken-2"> mdi-close
                </v-icon></v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
            <v-form ref="formFiltros" v-model="formularioValido">
                <div class="mt-10 px-14">
                    <v-row class="py-0 my-0">
                        <v-col cols="6" class="py-0 my-0 px-2">
                            Entrada/Saida:
                            <v-switch v-model="entradaSaidaBoolean" inset
                                :label="getDescricaoEntradaSaida(entradaSaidaBoolean)"></v-switch>
                        </v-col>
                        <v-col cols="6" class="py-0 my-0 px-2">
                            Valor:
                            <v-text-field id="entradaValor"
                                :rules="[regra.campoObrigatorio, regra.apenasNumeros]" v-model="entradaValor"
                                inset></v-text-field></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="py-0 my-0 px-2">
                            Mensagem
                            <v-text-field id="descricaoMensagem" :rules="[regra.campoObrigatorio]"
                                v-model="descricaoMensagem" inset></v-text-field>
                        </v-col>
                    </v-row>
                </div>
            </v-form>
        </v-card-text>
        <v-card-actions class="ma-6">
            <v-btn right class="ml-auto filtro-btn texto-azul-botao" text @click="fecharModal">
                Cancelar
            </v-btn>
            <v-btn right color="primary" class="white--text filtro-btn" @click="concluirOperacao()">
                Adicionar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script lang="ts">
import Component from 'vue-class-component';
import { Emit, Prop, Watch } from 'vue-property-decorator';
import { ConstantesGeral } from '@/commom/constantes/ConstantesGeral'
import { campoObrigatorio, apenasNumeros } from '@/commom/helpers/validadores'
import Vue from 'vue';
import EntradaSaidaModel from '@/models/EntradaSaidaModel';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { EntradaSaidaActionTypes } from '@/store/entradaSaida/actions';
const namespaces = namespace(StoreNamespaces.ENTRADA_SAIDA);


@Component({
    components: {},
})
export default class EntradaSaidaModal extends Vue {
    @namespaces.Action(EntradaSaidaActionTypes.ADICIONAR_VALORES)
    public adicionarValores!: (request:EntradaSaidaModel) => Promise<void>;

    public constantes = ConstantesGeral;
    public regra = {
        campoObrigatorio, apenasNumeros
    };
    public formularioValido: boolean = true;

    public existeAcao: boolean = false;
    public entradaSaidaBoolean: boolean = false;
    public entradaValor: string = "";
    public descricaoMensagem: string = "";

    public limparValidacao() {
        const form: any = this.$refs.formFiltros;
        if (form !== undefined) {
            form.resetValidation();
        }
        this.entradaSaidaBoolean = false;
        this.entradaValor = "";
        this.descricaoMensagem ="";
    }

    public concluirOperacao() {
        const formFiltros: any = this.$refs.formFiltros;
        let valor = parseFloat(this.entradaValor)
        if (formFiltros.validate()) {
            if(this.entradaSaidaBoolean){
                valor = -valor;
            }
            const request = new EntradaSaidaModel(this.descricaoMensagem, valor, new Date().toLocaleDateString());
            this.adicionarEntradaSaida(request);
        }
    }

    public async adicionarEntradaSaida(request: any) {
        this.$loader.iniciar();
        try {
            this.adicionarValores(request);
            setTimeout(()=>console.log("teste"), 3000);
            this.enviarResposta(true);
        } catch (e) {
            this.enviarResposta(false);
        } finally {
            this.$loader.finalizar();
            this.fecharModal;
        }
    }   

    public mounted(){
        this.limparValidacao();
    }


    @Emit('aoExecutarAcao')
    public enviarResposta(operacaoGravada: boolean): boolean {
        return operacaoGravada;
    }

    @Emit('fecharModal')
    public fecharModal(valor: boolean) {
        this.limparValidacao()

        return valor;
    }

    getDescricaoEntradaSaida(valor: boolean) {
        const entradaSaida = this.constantes.ENTRADA_SAIDA.find(item => item.codigo === (valor ? 'S' : 'E')); //entrada = false - saida = true
        return entradaSaida ? entradaSaida.descricao : '';
    }

}
</script>
  
<style scoped lang="scss">
.texto-padrao {
    color: rgba(0, 0, 0, 0.7);
}

.filtro-btn {
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: none !important;
    min-width: 110px !important;
}

.texto-azul-botao {
    color: #2f54d3 !important;
}
</style>
  