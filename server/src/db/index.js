import Database from 'better-sqlite3'

const db = new Database('shopping.db');

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT    NOT NULL,
    amount     INTEGER NOT NULL DEFAULT 1,
    bought     INTEGER NOT NULL DEFAULT 0,
    created_at TEXT    NOT NULL DEFAULT (datetime('now'))
  )
`);

export default db

