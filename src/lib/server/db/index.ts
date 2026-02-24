import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { neon } from '@neondatabase/serverless';

export function initDatabase() {
	if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

	const client = neon(env.DATABASE_URL);

	return drizzle(client, { schema });
}

export type DB = ReturnType<typeof initDatabase>;
