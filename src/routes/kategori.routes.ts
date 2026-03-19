import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { D1Database } from "@cloudflare/workers-types";
import * as schema from "../db/schema";
import * as kategoriService from "../services/kategori.service";
import { successResponse, errorResponse } from "../utils/response";

type Bindings = {
    sistem_manajemen_kantin_db: D1Database;
}

const kategoriRoutes = new Hono<{ Bindings: Bindings}>();

kategoriRoutes.get('/', async (c) => {
    const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
    const data = await kategoriService.getAllKategori(db);
    return successResponse(c, 200, "Berhasil mengambil daftar kategori", data);
});

kategoriRoutes.get('/:id', async (c) => {
    // get kategori by id
    const id = c.req.param('id');
    const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
    const data = await kategoriService.getKategoriById(db, id);
    return successResponse(c, 200, "Berhasil mengambil kategori", data);
})

kategoriRoutes.post('/', async (c) => {
    // create kategori
    const { nama_kategori } = await c.req.json();
    const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
    const data = await kategoriService.createKategori(db, nama_kategori);
    return successResponse(c, 201, "Kategori berhasil ditambahkan", data);
})

kategoriRoutes.patch('/:id', async (c) => {
    // update kategori
    
})

kategoriRoutes.delete('/:id', async (c) => {
    // delete kategori
})

export default kategoriRoutes;