import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const loginBodySchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});
export type LoginBodySchema = z.infer<typeof loginBodySchema>;

const loginResponseSchema = z.object({
  result: z.string(),
  token: z.string(),
});

export const { schemas: authSchemas, $ref } = buildJsonSchemas(
  {
    loginBodySchema,
    loginResponseSchema,
  },
  { $id: 'Auth' }
);
