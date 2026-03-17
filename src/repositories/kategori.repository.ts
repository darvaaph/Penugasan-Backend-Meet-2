import { DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "../db/schema"; 
import { eq } from "drizzle-orm";
import { generateId } from "../utils/id";

type DB = DrizzleD1Database<typeof schema>;

export const getAllKategori = async (db: DB) => {
    return await db.select().from(schema.kategori);
}

export const getKategoriById = async (db: DB, id: string) => {
    return await db.select().from(schema.kategori).where(eq(schema.kategori.id, id));
}

export const createKategori = async (db: DB, nama_kategori: string) => {
    return await db.insert(schema.kategori).values({
        id: generateId(),
        nama_kategori: nama_kategori,
        created_at: new Date().toISOString()
    });
}

export const updateKategori = async (db: DB, id: string, nama_kategori: string) => {
    return await db.update(schema.kategori)
        .set({
            nama_kategori: nama_kategori
        })
        .where(eq(schema.kategori.id, id));
}