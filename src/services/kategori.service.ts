import * as kategoriRepository from "../repositories/kategori.repository";
import { DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "../db/schema";

type DB = DrizzleD1Database<typeof schema>;

export const getAllKategori = async (db: DB) => {
    return await kategoriRepository.getAllKategori(db);
}

export const getKategoriById = async (db: DB, id: string) => {
    const kategori = await kategoriRepository.getKategoriById(db, id);

    if (kategori.length === 0) {
        throw new Error("Kategori Tidak di Temukan");
    }

    return kategori[0];
}

export const createKategori = async (db: DB, nama_kategori: string) => {
    return await kategoriRepository.createKategori(db, nama_kategori);
}

export const updateKategori = async (db: DB, id: string, nama_kategori: string) => {
    const kategori = await kategoriRepository.updateKategori(db, id, nama_kategori);

    if (kategori.length === 0) {
        throw new Error("Kategori Tidak di Temukan");
    }

    return kategori[0];
}

export const deleteKategori = async (db: DB, id: string) => {
    const kategori = await kategoriRepository.deleteKategori(db, id);

    if (kategori.length === 0) {
        throw new Error("Kategori Tidak di Temukan");
    }

    return kategori[0];
}