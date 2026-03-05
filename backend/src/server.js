import express from "express"
import dotenv from "dotenv"
import app from "./app.js";
import path from "path"
import { checkDBConnection } from "./config/db.js";
import { createDefaultAdmin } from "./utils/defaultAdmin.js";

dotenv.config();

checkDBConnection();

createDefaultAdmin();

app.use("/uploads", express.static(path.join(process.cwd(), 'uploads')));

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
});

