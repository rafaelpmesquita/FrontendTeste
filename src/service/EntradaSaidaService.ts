import EntradaSaidaConfig from '@/models/EntradaSaidaConfig';
import EntradaSaidaModel from '@/models/EntradaSaidaModel';
import axios from 'axios';
export class EntradaSaidaService {
  
    public async buscarValores() {
   
        // const a = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const teste = [
            new EntradaSaidaModel("Mensagem compra",100.00, new Date().toLocaleDateString()),
            new EntradaSaidaModel("Mensagem compra",200.00, new Date().toLocaleDateString())
        ]
        const caixaEntradaSaida  = new EntradaSaidaConfig("Caixa",teste,200.00);
        return caixaEntradaSaida;
    
    }
    public async adicionarValor(request: EntradaSaidaModel) {
   
        // const a = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const teste = [
            new EntradaSaidaModel("Mensagem compra",100.00, new Date().toLocaleDateString()),
            new EntradaSaidaModel("Mensagem compra",200.00, new Date().toLocaleDateString())
        ]
        const caixaEntradaSaida  = new EntradaSaidaConfig("Caixa",teste,200.00);
        return caixaEntradaSaida;
    
    }
}
