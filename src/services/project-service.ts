import { AxiosInstance } from 'axios';
import { api } from 'boot/axios';

class ProjectService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = api;
  }
}

const projectService = new ProjectService();

export { projectService };
