import fp from 'fastify-plugin';
import { LoginBodySchema, LoginBodySchemaType } from './schemas/login';
import { generateHash } from '../../utils/generate_hash';
import { getUserByEmail } from '../../controllers/users';

export default fp(
  async function auth(fastify) {
    fastify.post<{ Body: LoginBodySchemaType }>(
      '/login',
      {
        schema: {
          body: LoginBodySchema,
        },
      },
      async request => {
        const user = await getUserByEmail(fastify.db, request.body.email);
        if (!user) {
          throw fastify.httpErrors.unauthorized('Wrong credentials provided!');
        }

        const { hash } = await generateHash(request.body.password, user.salt);

        if (hash !== user.password) {
          throw fastify.httpErrors.unauthorized('Wrong credentials provided!');
        }

        const data = {
          token: request.generateToken({
            id: user.id,
            email: user.email,
          }),
        };
        return { success: 'true', data };
      }
    );
  },
  {
    name: 'auth-routes',
    encapsulate: true,
  }
);
