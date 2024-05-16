import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  password: text('password'),
  salt: text('salt'),
  created: text('created').default(sql`(CURRENT_TIMESTAMP)`),
});

export const selectUserSchema = createSelectSchema(users);
export type User = z.infer<typeof selectUserSchema>;
