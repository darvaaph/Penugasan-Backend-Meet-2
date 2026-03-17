import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const kategori = sqliteTable("kategori", {
    id: text("id").primaryKey(),
    nama_kategori: text("nama_kategori").notNull(),
    created_at: text("created_at").default(new Date().toISOString())
});

export const menu = sqliteTable("menu", {
    id: text("id").primaryKey(),
    kategori_id: text("kategori_id").notNull().references(() => kategori.id),
    nama_menu: text("nama_menu").notNull(),
    harga: integer("harga").notNull(),
    stok: integer("stok").notNull().default(0),
    created_at: text("created_at").default(new Date().toISOString())
});