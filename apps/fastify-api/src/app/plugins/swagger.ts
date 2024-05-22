import fp from 'fastify-plugin';
import SwaggerUI from '@fastify/swagger-ui';
import Swagger, { type FastifyDynamicSwaggerOptions } from '@fastify/swagger';
import process from 'process';

export default fp<FastifyDynamicSwaggerOptions>(async fastify => {
  await fastify.register(Swagger, {
    openapi: {
      info: {
        title: 'Kobeee',
        description: 'API Endpoints for demo',
        version: '0.1.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  if (process.env.NODE_ENV !== 'production') {
    await fastify.register(SwaggerUI);
  }
});
