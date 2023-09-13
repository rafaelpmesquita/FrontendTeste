<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400px">
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark" class="custom-toolbar">
          <v-toolbar-title class="text-h6">
            {{ caixaEntradaSaida.titulo }}
            <v-spacer></v-spacer>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon class="add-button" @click="janelaAberta = !janelaAberta">
            <v-icon class="add-icon">mdi-plus</v-icon>
          </v-btn>
          <template v-slot:append>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
        </v-toolbar>
        <v-card-actions>
          <h1 class="font-weight-bold ms-1 mb-2">
            Total : R$ {{ caixaEntradaSaida.valorTotal }}
          </h1>
          <v-spacer></v-spacer>

          <v-btn :icon="true" @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>

        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>

              <v-timeline density="compact" align="start">
                <v-timeline-item v-for="caixa in caixaEntradaSaida.caixa" :key="caixa.valor" size="x-small">
                  <div class="mb-4">
                    <div class="font-weight-normal">
                      <strong>{{ caixa.data }}</strong>
                    </div>
                    <div>
                      <h2>R${{ caixa.valor }}</h2>
                    </div>
                    <div>{{ caixa.mensagem }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </div>
        </v-expand-transition>

      </v-card>
    </v-row>
    <v-dialog :retain-focus="false" v-model="janelaAberta" scrollable max-width="80%">
      <entrada-saida-modal @fecharModal="janelaAberta = false" @aoExecutarAcao="concluirProcesso" />
    </v-dialog>
    <v-snackbar v-model="snackbar.ativa" color="white" class="">
      <v-icon :color="snackbar.icone === 'mdi-check' ? 'green' : 'red'" class="mr-1">
        {{ snackbar.icone }}
      </v-icon>
      <span class="textoSnackbar">{{ snackbar.texto }}</span>
    </v-snackbar>
    
  </v-container>
</template>
<script lang="ts">
import EntradaSaidaConfig from '@/models/EntradaSaidaConfig';
import { Component, Prop, Vue } from 'vue-property-decorator';
import EntradaSaidaModal from './EntradaSaidaModal.vue';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { EntradaSaidaGetterTypes } from '@/store/entradaSaida/getters';
import { EntradaSaidaActionTypes } from '@/store/entradaSaida/actions';
const namespaces = namespace(StoreNamespaces.ENTRADA_SAIDA);

@Component({ components: { EntradaSaidaModal } })
export default class EntradaSaidaCard extends Vue {
  @namespaces.Getter(EntradaSaidaGetterTypes.RESULTADO_VALORES)
  public caixaEntradaSaida!: EntradaSaidaConfig;

  @namespaces.Action(EntradaSaidaActionTypes.BUSCAR_VALORES)
  public buscarValores!: () => Promise<any>;

  public show: boolean = false;
  public janelaAberta: boolean = false;
  public snackbar = {
    ativa: false,
    icone: '',
    texto: '',
  };

  public beforeMount() {
    this.buscarValores();
  }
  public async concluirProcesso(operacaoConcluida: any) {
    let mensagem =
      'Não foi possível concluir a operação. Tente novamente mais tarde.';
    let icone = 'mdi-error';
    if (operacaoConcluida) {
      mensagem = 'Operação concluída com sucesso!';
      icone = 'mdi-dots-vertical';
    }
    this.snackbar.texto = mensagem;
    this.snackbar.icone = icone;
    this.snackbar.ativa = true;
  }
}
</script>
<style>
.custom-toolbar {
  background: linear-gradient(to right, lightgreen, red);
}

.add-button {
  max-width: 60px;
  max-height: 40px;
  border-radius: 20%;
  background-color: #1976D2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-icon {
  font-size: 24px;
  color: black;
}

.textoSnackbar{
  color: black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}

</style>