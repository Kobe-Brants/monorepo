import { Client as ApiClient } from '@monorepo-demo/fastify-openapi-gen/client';
import { Paths } from '@monorepo-demo/fastify-openapi-gen/client';
import { api } from '../main';

export type LoginRequestBody = Paths.Login.RequestBody;

export default {
  async login(body: LoginRequestBody) {
    const client = await api.init<ApiClient>();
    return await client.login({}, body);
  },
};
