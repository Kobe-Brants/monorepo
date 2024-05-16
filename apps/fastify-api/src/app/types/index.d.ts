// noinspection ES6UnusedImports
import Fastify, { FastifyBaseLogger, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify';
import { EnvSchemaType } from '../schemas/dotenv';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';

declare module 'fastify' {
  export interface FastifyRequest {
    generateToken: (payload: Record<string, any>) => string;
  }
  export interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger = FastifyBaseLogger
  > {
    db: BetterSQLite3Database;
    config: EnvSchemaType;
    authenticate: (request: FastifyRequest, reply: FastifyReply) => void;
  }
}
