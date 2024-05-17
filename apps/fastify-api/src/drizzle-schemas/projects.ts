import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const projects = sqliteTable('projects', {
  id: text('id').primaryKey(),
  name: text('name'),
  ownerId: text('owner_id')
    .notNull()
    .references(() => users.id),
});

export interface Project {
  id: number;
  name: string;
  ownerId: string;
}
