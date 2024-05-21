import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../../controllers/users';
import fp from 'fastify-plugin';
import { User } from '../../../drizzle-schemas/users';
import { generateHash } from '../../utils/generate_hash';

export default fp(
  async function users(fastify: FastifyInstance) {
    fastify.get('/', { schema: { tags: ['User'], operationId: 'getUsers' }, preHandler: [fastify.authenticate] }, async () => {
      return getAllUsers(fastify.db);
    });

    fastify.get(
      '/:id',
      { schema: { tags: ['User'], operationId: 'getUser' }, preHandler: [fastify.authenticate] },
      async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
        const userId = request.params.id;

        const user = await getUserById(fastify.db, userId);
        if (user) return user;

        reply.code(404).send({ error: 'Not found' });
      }
    );

    fastify.get('/seed', { schema: { tags: ['User'] }, preHandler: [fastify.authenticate] }, async () => {
      const { salt, hash } = await generateHash('123456');

      return await createUser(fastify.db, {
        name: 'Kobe',
        email: 'kobe.brants@telenet.be',
        password: hash,
        salt: salt,
      } as User);
    });

    fastify.post('/', { schema: { tags: ['User'] }, preHandler: [fastify.authenticate] }, async (request: FastifyRequest<{ Body: { name: string } }>, reply: FastifyReply) => {
      const body = request.body;
      const createdUser = await createUser(fastify.db, body as User);

      reply.code(200).send(createdUser);
    });

    fastify.put(
      '/:id',
      { schema: { tags: ['User'] }, preHandler: [fastify.authenticate] },
      async (
        request: FastifyRequest<{
          Params: { id: string };
          Body: { name: string };
        }>,
        reply: FastifyReply
      ) => {
        const userId = request.params.id;
        const body = request.body;
        const updatedUser = await updateUser(fastify.db, userId, body as User);

        reply.code(200).send(updatedUser);
      }
    );

    fastify.delete('/:id', { schema: { tags: ['User'] }, preHandler: [fastify.authenticate] }, async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
      const userId = request.params.id;
      await deleteUser(fastify.db, userId);

      reply.code(204).send();
    });
  },
  {
    name: 'users-routes',
    encapsulate: true,
  }
);
