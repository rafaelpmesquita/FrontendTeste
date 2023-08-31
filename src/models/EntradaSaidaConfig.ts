import EntradaSaidaModel from "./EntradaSaidaModel";

export default class EntradaSaidaConfig {
    public titulo: string;
    public valorTotal: number;
    public caixa: EntradaSaidaModel[];

    constructor(titulo: string, caixa: EntradaSaidaModel[], valorTotal: number) {
        this.titulo = titulo;
        this.valorTotal = valorTotal;
        this.caixa = caixa;
    }
}
