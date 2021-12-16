import { Pool } from "pg";

const { DB_URL } = process.env;

const connectionString = DB_URL;

const db = new Pool({ connectionString });

export default db;
