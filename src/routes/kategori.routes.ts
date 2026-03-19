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
    // get all kategori
    try {
        const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
        const data = await kategoriService.getAllKategori(db);
        return successResponse(c, 200, "Berhasil mengambil daftar kategori", data);
    } catch (error) {
        return errorResponse(c, 500, "Terjadi kesalahan server");
    }
});

kategoriRoutes.get('/:id', async (c) => {
    // get kategori by id
    try {
        const id = c.req.param('id');
        const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
        const data = await kategoriService.getKategoriById(db, id);
        return successResponse(c, 200, "Berhasil mengambil kategori", data);
    } catch (error) {
        return errorResponse(c, 404, "Kategori tidak ditemukan");
    }
})

kategoriRoutes.post('/', async (c) => {
    // create kategori
    try {
        const { nama_kategori } = await c.req.json();
        const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
        const data = await kategoriService.createKategori(db, nama_kategori);
        return successResponse(c, 201, "Kategori berhasil ditambahkan", data);
    } catch (error) {
        return errorResponse(c, 500, "Gagal menambahkan kategori");
    }
})

kategoriRoutes.patch('/:id', async (c) => {
    // update kategori
    try {
        const id = c.req.param('id');
        const { nama_kategori } = await c.req.json();
        const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
        const data = await kategoriService.updateKategori(db, id, nama_kategori);
        return successResponse(c, 200, "Kategori berhasil diupdate", data);
    } catch (error) {
        return errorResponse(c, 404, "Kategori tidak ditemukan");
    }
})

kategoriRoutes.delete('/:id', async (c) => {
    // delete kategori
    try {
        const id = c.req.param('id');
        const db = drizzle(c.env.sistem_manajemen_kantin_db, { schema });
        const data = await kategoriService.deleteKategori(db, id);
        return successResponse(c, 200, "Kategori berhasil dihapus", data);
    } catch (error) {
        return errorResponse(c, 404, "Kategori tidak ditemukan");
    }
})

export default kategoriRoutes;