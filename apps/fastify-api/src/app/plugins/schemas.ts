import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { userSchemas } from '../routes/users/users.schemas';
import { authSchemas } from '../routes/auth/auth.schemas';

export default fp(async function (fastify: FastifyInstance) {
  for (const schema of [...authSchemas, ...userSchemas]) {
    fastify.addSchema({ ...schema });
  }
});
