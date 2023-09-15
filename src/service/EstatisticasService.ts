import EstaticBarConfig from '@/models/EstaticBarConfig';
import axios from 'axios';
export class EstatisticasService {
  
    public async buscarDataLabel() {
   
        // const a = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const valores: EstaticBarConfig[] = [
            new EstaticBarConfig("Data", [40,30,50,60,70,80,90,120,31,10], ["#90ee90"]),
            new EstaticBarConfig("Teste", [30,40,70,50,30,40,110,10,36,80], ["#90ee90"]),
            new EstaticBarConfig("Conceito", [10,20,30,90,80,76,1,321,10,20], ["#90ee90"]),
        ];
        const labels: any[] = [1,2,3,4,5,6,7,8,9,10];
        return { valores: valores, labels: labels };
    }
}
