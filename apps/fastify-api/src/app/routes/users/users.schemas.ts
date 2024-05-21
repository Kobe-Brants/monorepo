import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const getUsersResponseBodySchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    salt: z.string(),
    created: z.string(),
  })
);
export type GetUsersResponseBodySchema = z.infer<typeof getUsersResponseBodySchema>;

const getUserResponseBodySchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  salt: z.string(),
  created: z.string(),
});
export type GetUserResponseBodySchema = z.infer<typeof getUserResponseBodySchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    getUsersResponseBodySchema,
    getUserResponseBodySchema,
  },
  { $id: 'usersSchemas' }
);
