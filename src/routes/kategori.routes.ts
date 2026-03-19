import { Hono } from "hono";
import { D1Database } from "@cloudflare/workers-types";

type Bindings = {
    sistem_manajemen_kantin_db: D1Database;
}

const kategoriRoutes = new Hono<{ Bindings: Bindings}>();

kategoriRoutes.get('/', async (c) => {
    // get all kategori
})

kategoriRoutes.get('/:id', async (c) => {
    // get kategori by id
    const id = c.req.param('id');
})

kategoriRoutes.post('/', async (c) => {
    // create kategori
    const body = await c.req.json();
})

kategoriRoutes.patch('/:id', async (c) => {
    // update kategori
})

kategoriRoutes.delete('/:id', async (c) => {
    // delete kategori
})

export default kategoriRoutes;