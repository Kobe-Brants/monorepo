import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../../controllers/users';
import fp from 'fastify-plugin';
import { User } from '../../../drizzle-schemas/users';
import { generateHash } from '../../utils/generate_hash';

export default fp(
  async function users(fastify: FastifyInstance) {
    fastify.get('/', async () => {
      return getAllUsers(fastify.db);
    });

    fastify.get('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
      const userId = request.params.id;

      const user = await getUserById(fastify.db, userId);
      if (user) return user;

      reply.code(404).send({ error: 'Not found' });
    });

    fastify.get('/seed', async () => {
      const { salt, hash } = await generateHash('123456');

      return await createUser(fastify.db, {
        name: 'Kobe',
        email: 'kobe.brants@telenet.be',
        password: hash,
        salt: salt,
      } as User);
    });

    fastify.post('/', async (request: FastifyRequest<{ Body: { name: string } }>, reply: FastifyReply) => {
      const body = request.body;
      const createdUser = await createUser(fastify.db, body as User);

      reply.code(200).send(createdUser);
    });

    fastify.put(
      '/:id',
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

    fastify.delete('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
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
