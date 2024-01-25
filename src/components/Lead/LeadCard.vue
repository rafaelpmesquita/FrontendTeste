<template>
    <v-card>
        <v-card-title>
            <v-row>
                <v-col cols="12" sm="2" md="2" lg="1">
                    <v-avatar color="primary" size="56">{{ getFirstChar() }}</v-avatar>
                </v-col>
                <v-col cols="12" sm="10" md="10" lg="11">
                    <v-row>
                        <v-col cols="12" class="noPad mt-4">
                            <span class="body-1 font-weight-bold">{{ lead.statusLeadId !== 1 ? lead.contactFirstName :
                                lead.contactFullName }}</span>
                        </v-col>
                        <br>
                        <span class="noPad caption grey--text">{{ lead.dateCreated }}</span>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-title>
        <div>

            <v-divider></v-divider>

            <!-- <v-card-text> -->
            <div class="mb-2 mt-2">
                <v-row>
                    <v-col cols="12" sm="6" md="3" lg="3">
                        <v-icon class=" pl-4 grey--text">mdi-map-marker</v-icon> <span class="noPad  grey--text">{{
                            lead.suburb }}</span>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="3">
                        <v-icon class="pl-4 grey--text">mdi-briefcase</v-icon> <span class="noPad  grey--text">{{
                            lead.category }}</span>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="3">
                        <span class="pl-4 grey--text">Job ID: {{ lead.id }}</span></v-col>
                    <v-col v-if="lead.statusLeadId == 1" cols="12" sm="6" md="3" lg="3">
                        <span class="pl-4 py-2 black--text">${{ lead.price }}</span>
                        <span class="pl-4 grey--text">Lead Invitation</span></v-col>
                </v-row>
            </div>
            <!-- </v-card-text> -->
            <v-divider></v-divider>
            <div v-if="lead.statusLeadId === 1" class="pt-2 pb-2">
                <v-row>
                    <v-col cols="12" sm="6" md="2" lg="2">
                        <v-icon class="pl-4 grey--text">mdi-phone</v-icon> <span class="noPad  orange--text">{{
                            lead.contactPhoneNumber }}</span>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" lg="2">
                        <v-icon class=" pl-4 grey--text">mdi-email</v-icon> <span class="noPad  orange--text">{{
                            lead.contactEmail }}</span>
                    </v-col>
                </v-row>
            </div>
            <v-divider></v-divider>

            <div class="mt-2 mb-2 pb-2">
                <span class="pl-4 mt-2 pt-2 black--text">
                    {{ lead.description }}
                </span>
            </div>
            <div v-if="lead.statusLeadId === 3">
                <v-divider></v-divider>

                <div class="mt-2 pl-4 pb-2">
                    <v-row>
                        <v-col cols="12" sm="6" md="2" lg="2">
                            <v-btn class="pl-4 white--text" depressed color="#FF7B19" @click="mudarStatus(1)">
                                Accept
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="2" lg="2">

                            <v-btn class="pl-4 black--text" depressed color="#d3d3d3" @click="mudarStatus(2)">
                                Decline
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="3" lg="3" class="d-flex align-center">

                            <span class="pl-4 py-2 black--text">${{ lead.price }}</span>
                            <span class="pl-4 grey--text">Lead Invitation</span>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LeadModel from '@/models/LeadModel'
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { LeadActionTypes } from '@/store/leads/actions';
const namespaces = namespace(StoreNamespaces.LEAD);

@Component({})
export default class LeadCard extends Vue {
    @Prop()
    public lead!: LeadModel;

    @Prop()
    public endpoint?:boolean;

    @namespaces.Action(LeadActionTypes.UPDATE_STATUS)
    public changeLeadStatus!: (request : {lead: LeadModel, endpoint:string}) => Promise<void>;
    @namespaces.Action(LeadActionTypes.GET_INVITED)
    public getLeadInvited!: (request: string) => Promise<void>;

    public async mudarStatus(status: number) {
        let leadChanged: LeadModel = this.lead;
        leadChanged.statusLeadId = status;
        const endpoint = this.endpoint? '/cqrs' : ''
        await this.changeLeadStatus({lead:leadChanged,endpoint: endpoint});
        await this.getLeadInvited(endpoint)
    }
    public getFirstChar() {
        return this.lead.contactFirstName.charAt(0);
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

.noPad {
    padding-bottom: 0;
    padding-top: 0;
}
</style>