import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password'),
  salt: text('salt'),
  created: text('created').default(sql`(CURRENT_TIMESTAMP)`),
});

export interface User {
  id: string;
  name?: string;
  email: string;
  password?: string;
  salt?: string;
  created: string;
}
