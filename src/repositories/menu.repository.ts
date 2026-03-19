import { DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "../db/schema"; 
import { eq } from "drizzle-orm";
import { generateId } from "../utils/id";

type DB = DrizzleD1Database<typeof schema>;

export const getAllMenu = async (db: DB) => {
    return await db.select().from(schema.menu).leftJoin(schema.kategori, eq(schema.menu.kategori_id, schema.kategori.id));
}

export const getMenuById = async (db: DB, id: string) => {
    return await db.select().from(schema.menu).leftJoin(schema.kategori, eq(schema.menu.kategori_id, schema.kategori.id)).where(eq(schema.menu.id, id));
}

export const createMenu = async (db: DB, kategori_id: string, nama_menu: string, harga: number, stok: number) => {
    const id = generateId();
    await db.insert(schema.menu).values({
        id: id,
        kategori_id: kategori_id,
        nama_menu: nama_menu,
        harga: harga,
        stok: stok,
        created_at: new Date().toISOString()
    });
    return await db.select().from(schema.menu).where(eq(schema.menu.id, id));
}

export const updateMenu = async (db: DB, id: string, kategori_id: string, nama_menu: string, harga: number, stok: number) => {
    return await db.update(schema.menu)
    .set({
        kategori_id: kategori_id,
        nama_menu: nama_menu,
        harga: harga,
        stok: stok
    })
    .where(eq(schema.menu.id, id));
}

