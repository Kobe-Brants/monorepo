import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/drizzle-schemas/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: '../../mydb.sqlite',
  },
});
