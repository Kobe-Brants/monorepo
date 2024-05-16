import { FastifyInstance } from 'fastify';

async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return 'ok';
  });
}

export default healthRoutes;
