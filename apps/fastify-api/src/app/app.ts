import * as path from 'path';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import { EnvSchema } from './schemas/dotenv';
import Env from '@fastify/env';

export async function app(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  await fastify.register(Env, {
    schema: EnvSchema,
    dotenv: true,
    data: opts.configData,
  });

  fastify.register(cors);

  // TODO move
  fastify.addSchema({
    $id: 'user',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id',
      },
    },
  });

  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts, autoHooks: true, cascadeHooks: true },
  });

  if (fastify.config.NODE_ENV === 'development') {
    console.log('CURRENT ROUTES:');
    console.log(fastify.printRoutes());
  }
}
