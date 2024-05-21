import OpenAPIClientAxios from 'openapi-client-axios';
import { Client as ApiClient, Components } from '@monorepo-demo/fastify-openapi-gen/client';
import { api } from '../main';

export type GetUsersResponseBodySchema = Components.Schemas.Def1.Properties.GetUsersResponseBodySchema;
export type GetUserResponseBodySchema = Components.Schemas.Def1.Properties.GetUserResponseBodySchema;

export default {
  async getUsers() {
    const client = await api.init<ApiClient>();
    return await client.getUsers();
  },
  async getUser(id: string) {
    const client = await api.init<ApiClient>();
    return await client.getUser({ id });
  },
};
