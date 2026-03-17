import { DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "../db/schema"; 

type DB = DrizzleD1Database<typeof schema>;

export const getAllKategori = async (db: DB) => {
    return await db.select().from(schema.kategori);
}