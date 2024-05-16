import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { eq, sql } from 'drizzle-orm';
import { User } from '../models/users/user';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';

const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  created: text('created').default(sql`(CURRENT_TIMESTAMP)`),
});

export const getAllUsers = async (db: BetterSQLite3Database) => {
  return db.select().from(users).all();
};

export const getUserById = async (db: BetterSQLite3Database, id: string) => {
  return db.select().from(users).where(eq(users.id, id));
};

export const getUserByEmail = async (db: BetterSQLite3Database, email: string) => {
  return db.select().from(users).where(eq(users.email, email));
};

export const createUser = async (db: BetterSQLite3Database, user: User) => {
  return db.insert(users).values(user).returning();
};

export const updateUser = async (db: BetterSQLite3Database, userId: string, user: User) => {
  return db.update(users).set(user).where(eq(users.id, userId)).returning();
};

export const deleteUser = async (db: BetterSQLite3Database, userId: string) => {
  return db.delete(users).where(eq(users.id, userId));
};
