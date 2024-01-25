import LeadModel from '@/models/LeadModel';
import axios from 'axios';
export class LeadService {
    public async getInvited(request:string) {
        const response = await axios.get('https://localhost:7156/api/Lead' + request);
        return response.data;
    }
    public async getAccepted(request:string) {
        const response = await axios.get('https://localhost:7156/api/Lead'+request+'/accepted');
        return response.data;
    }
    public async changeStatus(request: LeadModel,endpoint:string) {
        const response = await axios.put('https://localhost:7156/api/Lead'+endpoint+'/changeStatus', request);
        return response;
    }
}
