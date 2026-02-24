import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { neon } from '@neondatabase/serverless';

export function initDatabase(url?: string) {
	const client = neon(url ?? process.env.DATABASE_URL);

	return drizzle(client, { schema });
}

export type DB = ReturnType<typeof initDatabase>;
