import { AxiosInstance } from 'axios';
import { api } from 'boot/axios';
import {Grant} from 'src/models/grant-models';

class GrantService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = api;
  }

  async getGrants1(): Promise<Grant[]> {
    const response = await this.httpClient.get<Grant[]>('/grants/test-1/filter');
    return  response.data;
  }
  async getGrants2(): Promise<Grant[]> {
    const response = await this.httpClient.get<Grant[]>('/grants/test-2/filter');
    return  response.data;
  }
}

const grantService = new GrantService();

export { grantService };
