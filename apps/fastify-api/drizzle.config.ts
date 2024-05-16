import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: '../../mydb.sqlite',
  },
});
