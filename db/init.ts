import path from "path";
import Database from "better-sqlite3";

// Путь к файлу базы данных
const dbPath = path.join(process.cwd(), "db", "Data.sqlite");
const db = new Database(dbPath);

export default db;
