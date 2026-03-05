import db from "../config/db.js"
import bcrypt from "bcrypt"

export const createDefaultAdmin = async(req,res)=>{
    try {
        const name = "admin";
        const email = "admin@gmail.com";
        const password = "admin123";
        const role = "admin";

        const [rows] = await db.query(
            "SELECT * FROM tbl_users WHERE role= ? AND email=?",
            [role,email]
        );

        if(rows.length === 0){
            const hasedPassowrd = await bcrypt.hash(password,10);

            await db.query("INSERT INTO tbl_users (name, email, password, role)",
                [name,email,hasedPassowrd,role]
            );
            console.log("Default Admin Created");

        }else{
            console.log("Admin already exists");
        }

    } catch (error) {
        console.error("Error creating default admin:", error.message)
    }
}