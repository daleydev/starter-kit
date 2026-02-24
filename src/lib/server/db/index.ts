import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { neon } from '@neondatabase/serverless';

export function initDatabase(connectionString?: string) {
	if (!connectionString) {
		throw new Error('DATABASE_URL is missing (check Cloudflare Worker/Pages env vars).');
	}

	const client = neon(connectionString);

	return drizzle(client, { schema });
}

export type DB = ReturnType<typeof initDatabase>;
