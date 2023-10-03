import { FilterMatchMode } from 'primevue/api';

export default class DataTableConfig {
    public nome: string;
    public data: any[];
    // public matchNode: FilterMatchMode;

    constructor(nome: string, data: any[], /*matchNode: FilterMatchMode*/) {
        this.nome = nome;   
        this.data = data;
        // this.matchNode = matchNode;
    }
}
