import { FastifyInstance } from 'fastify';

async function healthRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['Health'],
        operationId: 'getHealth',
      },
    },
    async () => {
      return 'ok';
    }
  );
}

export default healthRoutes;
