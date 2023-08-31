export default class EntradaSaidaModel {
    public valor: number;
    public mensagem: string;
    public data: string;

    constructor(mensagem: string, valor: number, data: string) {
        this.mensagem = mensagem;
        this.data = data;
        this.valor = valor;
    }
}
