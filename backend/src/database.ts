import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";

const databasePath = fileURLToPath(new URL("../data/marketlink.sqlite", import.meta.url));
mkdirSync(dirname(databasePath), { recursive: true });

export const database = new Database(databasePath);
