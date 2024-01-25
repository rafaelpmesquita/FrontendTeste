<template id="app">
  <v-card>
    <div class="d-flex align-center">
      <v-switch v-model="switchEnd" :label="switchEndpoint[switchEnd.toString()]" color="orange" hide-details></v-switch>

      <div style="margin-right: 10px"></div>

      <v-tooltip top color="#D9D9D9">
        <template v-slot:activator="{ on }">
          <v-icon small class="icone-info pb-1 pl-1" color="#FF7B19" v-on="on">mdi-information</v-icon>
        </template>
        <span class="black--text">CQRS: Se esse estiver selecionado, a requisição será feita no endpoint utilizando CQRS e
          Mediatr.
          <br>
          Controller-Service-Repository: Se esse estiver selecionado, a requisição será feita no endpoint utilizando essa
          estrutura de acesso a dados(É como eu utilizo hoje, junto com DDD).
        </span>
      </v-tooltip>
    </div>
    <v-tabs show-arrows height="40px" grow centered v-model="tabConteudo" hide-slider>
      <v-tab class="rounded-lg text-none" href="#invited" :style="estiloTabSelecionada('invited')">
        Invited
      </v-tab>
      <v-tab class="rounded-lg text-none" href="#accepted" :style="estiloTabSelecionada('accepted')">
        Accepted
      </v-tab>
    </v-tabs>
    <hr class="linha-laranja" />
    <v-tabs-items v-model="tabConteudo">
      <v-tab-item value="invited">
        <span v-if="leadsInvited.length == 0" indeterminate color="red">There`re no invited Leads</span>
        <v-card v-else flat color="#F2F2F2">
          <v-card-text v-for="leadInvited in leadsInvited" :key="leadInvited.id">
            <lead-card :lead="leadInvited" :endpoint="switchEnd"></lead-card>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="accepted">
        <span v-if="leadsAccepted.length == 0" indeterminate color="red">There`re no accepted Leads</span>
        <v-card v-else flat color="#F2F2F2">
          <v-card-text v-for="leadAccepted in leadsAccepted" :key="leadAccepted.id">
            <lead-card :lead="leadAccepted"></lead-card>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, } from 'vue-property-decorator';
import LeadCard from '@/components/Lead/LeadCard.vue';
import LeadModel from '@/models/LeadModel';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { LeadGetterTypes } from '@/store/leads/getters';
import { LeadActionTypes } from '@/store/leads/actions';

const namespaces = namespace(StoreNamespaces.LEAD);

@Component({
  components: {
    LeadCard
  }
})
export default class BaseLayout extends Vue {
  @namespaces.Action(LeadActionTypes.GET_INVITED)
  public getLeadInvited!: (request: string) => Promise<void>;
  @namespaces.Action(LeadActionTypes.GET_ACCEPTED)
  public getLeadAccepted!: (request: string) => Promise<void>;

  @namespaces.Getter(LeadGetterTypes.GET_INVITED)
  public leadsInvited!: LeadModel[];
  @namespaces.Getter(LeadGetterTypes.GET_ACCEPTED)
  public leadsAccepted!: LeadModel[];
  public switchEnd: boolean = true;
  public switchEndpoint = {
    true: 'CQRS',
    false: 'Controler-Service-Repository',
  };
  public tabConteudo: string = 'Invited';
  public estiloTabSelecionada(tab: string) {
    const tabSelecionada = this.tabConteudo === tab;
    return {
      'background-color': tabSelecionada ? '#FF7B19' : '#F2F2F2',
      'color': tabSelecionada ? 'white' : '#FF7B19',
    };
  }

  @Watch('tabConteudo')
  public async mudarConteudo() {
    const endpoint = this.switchEnd ? '/cqrs' : ''
    if (this.tabConteudo == 'invited') {
      await this.getLeadInvited(endpoint);
    }
    if (this.tabConteudo == 'accepted') {
      await this.getLeadAccepted(endpoint);
    }
  }
}
</script>

<style scoped>
.toolbar {
  height: 60px;
  background: #ffffff;
}

.titulo-cabecalho {
  font-size: 28px;
  color: #444444;
}

.linha-laranja {
  border: none;
  height: 3px;
  background-color: #FF7B19;
}
</style>