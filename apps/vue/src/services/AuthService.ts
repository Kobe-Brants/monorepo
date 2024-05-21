import OpenAPIClientAxios from 'openapi-client-axios';
import { Client as ApiClient } from '@monorepo-demo/fastify-openapi-gen/client';

const api = new OpenAPIClientAxios({
  definition: 'http://localhost:3000/documentation/json',
  axiosConfigDefaults: {
    baseURL: 'http://localhost:3000',
  },
});

export default {
  async login(body) {
    const client = await api.init<ApiClient>();
    return await client.login({}, body);
  },
};
