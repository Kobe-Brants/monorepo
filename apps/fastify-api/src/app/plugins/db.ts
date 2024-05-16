import fp from 'fastify-plugin';
import process from 'node:process';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

export default fp(
  function fastifyDb(fastify, options, next) {
    if (!fastify.db) {
      const sqlite = new Database(process.env.DB_FILENAME);
      const db = drizzle(sqlite);
      fastify.decorate('db', db);
    }
    next();
  },
  {
    name: 'db',
  }
);
