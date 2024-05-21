import OpenAPIClientAxios from 'openapi-client-axios';
import { Client as ApiClient } from '@monorepo-demo/fastify-openapi-gen/client';
import { Paths } from '@monorepo-demo/fastify-openapi-gen/client';

const api = new OpenAPIClientAxios({
  definition: 'http://localhost:3000/documentation/json',
  axiosConfigDefaults: {
    baseURL: 'http://localhost:3000',
  },
});

export type LoginRequestBody = Paths.Login.RequestBody;

export default {
  async login(body: LoginRequestBody) {
    const client = await api.init<ApiClient>();
    return await client.login({}, body);
  },
};
