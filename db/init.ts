import path from "path";
import Database from "better-sqlite3";

// Путь к файлу базы данных
const dbPath = path.join(process.cwd(), "db", "database.sqlite");
const db = new Database(dbPath);

// Создание таблицы пользователей
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

export default db;
