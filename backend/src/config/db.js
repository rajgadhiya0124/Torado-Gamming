import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

export const checkDBConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("MySQL Database Connected Successfully");
    connection.release(); // release back to pool
  } catch (error) {
    console.error("MySQL Connection Failed:");
    console.error(error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default db;