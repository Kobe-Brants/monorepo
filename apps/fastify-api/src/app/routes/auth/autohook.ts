import { getUserByEmail } from '../../controllers/users';
import { FastifyInstance } from 'fastify';

async function authAutoHooks(fastify: FastifyInstance) {
  fastify.decorate('usersDataSource', {
    findUser: async (email: string) => {
      const user = await getUserByEmail(fastify.db, email);
      if (!user || user.length === 0) {
        return null;
      }
      return user[0];
    },
  });
}

export default authAutoHooks;
