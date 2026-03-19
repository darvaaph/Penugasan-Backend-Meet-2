import { Hono } from 'hono';
import { D1Database } from '@cloudflare/workers-types';
import kategoriRoutes from './routes/kategori.routes';

type Bindings = {
    sistem_manajemen_kantin_db: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>();

app.route('/api/kategori', kategoriRoutes);

export default app;