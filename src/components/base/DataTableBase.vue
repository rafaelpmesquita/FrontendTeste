<template>
    <DataTable :value="variavel" paginator showGridlines :rows="10" dataKey="id" filterDisplay="menu"
        :globalFilterFields="colunasLower" :loading="loading" :filters.sync="filters">
        <template #header>
            <div class="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </span>
            </div>
        </template>
        <template #empty> Nada encontrado. </template>
        <template #loading> Carregando dados. Por favor, aguarde. </template>
        <div v-for="coluna in colunas">
            <Column :field="coluna.toLowerCase()" :header="coluna" style="min-width: 12rem">
                <template #body="slotProps">
                    <span>{{ slotProps.data[slotProps.column.field] }}</span>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter"
                        :placeholder="'Search ' + coluna.toLowerCase() + ':'" />
                </template>
            </Column>
        </div>
    </DataTable>
</template>
    
<script lang="ts">
import { ref } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import InputText from 'primevue/inputtext';
import { filter } from 'vue/types/umd';
import { elements } from 'chart.js';

@Component({
    components: { DataTable, Column, InputText, Button },
})
export default class DataTableBase extends Vue {
    public loading: boolean = false;
    public filters: any = ref();
    public colunasLower: string[] = [];

    @Prop()
    public colunas!: string[];

    @Prop()
    public variavel!: any[];

    public clearFilter() {
        this.initFilters();
    }

    public initFilters() {
        if (!this.filters) {
            this.filters = {};
        }

        // Configurar o filtro global aqui
        this.filters = {
            global: {
                value: null,
                matchMode: FilterMatchMode.CONTAINS,
            },
        };

        // Configurar os filtros locais
        for (const coluna of this.colunasLower) {
            let filterMatchMode = FilterMatchMode.STARTS_WITH;
            this.filters[coluna] = {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: filterMatchMode }],
            };
        }
    }


    public beforeMount() {
        this.colunas.forEach(element=> this.colunasLower.push(element.toLowerCase()));
        this.initFilters();
    }

}
</script>

<style>
.textoSnackbar {
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}
</style>