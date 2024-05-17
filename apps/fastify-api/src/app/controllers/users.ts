import { eq } from 'drizzle-orm';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { User, users } from '../../drizzle-schemas/users';

export const getAllUsers = async (db: BetterSQLite3Database) => {
  return db.select().from(users).all();
};

export const getUserById = async (db: BetterSQLite3Database, id: string) => {
  return (await db.select().from(users).where(eq(users.id, id))).at(0);
};

export const getUserByEmail = async (db: BetterSQLite3Database, email: string) => {
  return (await db.select().from(users).where(eq(users.email, email))).at(0);
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
