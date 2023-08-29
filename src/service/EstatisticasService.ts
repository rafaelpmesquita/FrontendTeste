import EstaticBarConfig from '@/models/EstaticBarConfig';
import axios from 'axios';
export class EstatisticasService {
  
    public async buscarDataLabel() {
   
        // const a = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        const valores: EstaticBarConfig[] = [
            new EstaticBarConfig("Data", [40, 30, 50], ["#fff312"]),
            new EstaticBarConfig("Data", [30, 10, 20], ["#ffg772"]),
        ];
        const labels: string[] = ["teste", "teste1"];

        return { valores: valores, labels: labels };
    }
}
