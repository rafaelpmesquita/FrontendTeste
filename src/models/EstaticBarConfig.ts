export default class EstaticBarConfig {
    public label: string;
    public valores: number[];
    public cor: string[];

    constructor(label: string, valores: number[], cor: string[]) {
        this.label = label;
        this.valores = valores;
        this.cor = cor;
    }
}
