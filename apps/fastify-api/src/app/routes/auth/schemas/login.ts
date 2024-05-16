import { type Static, Type } from '@sinclair/typebox';

export const LoginBodySchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String(),
});

export type LoginBodySchemaType = Static<typeof LoginBodySchema>;
