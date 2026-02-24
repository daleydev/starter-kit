import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { neon } from '@neondatabase/serverless';
import { building } from '$app/environment';
import { env } from '$env/dynamic/private';

const client = neon(env.DATABASE_URL!);

export const db = drizzle(client, { schema });
