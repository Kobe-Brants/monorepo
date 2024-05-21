import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { userSchemas } from '../routes/auth/schemas/login';

export default fp(async function (fastify: FastifyInstance) {
  for (const schema of [...userSchemas]) {
    fastify.addSchema(schema);
  }
});
