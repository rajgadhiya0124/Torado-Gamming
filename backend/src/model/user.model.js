import db from "../config/db.js";

export const UserModel = {

    RegiserUser: async(data)=>{
        const {first_name,last_name,username,email,password,createdBy} = data;

        const [rows] = await db.query("CALL sp_register_user(?,?,?,?,?,?)",
            [first_name,last_name,username,email,password,createdBy]
        );
        return rows;
    },

    FindUserByEmail: async(email)=>{
        const [rows] = await db.query("CALL sp_find_exists_email(?)",
            [email]
        );

        return rows[0];
    },

    loginUser: async(login)=>{
        const [rows] = await db.query("CALL sp_login_user(?)",
            [login]
        );

        return rows[0][0];
    },

    deleteUser : async(data)=>{
        const {id,updatedBy} = data;

        const rows = await db.query("CALL sp_delete_user(?,?)",
            [id,updatedBy]
        );

        return rows;
    }
}