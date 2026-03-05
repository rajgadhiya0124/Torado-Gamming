import db from "../config/db.js";

export const contactUsModel = {

    createContactUs: async(data)=>{
        const {name, email, phone, subject,message,createdBy} = data;

        const [result] = await db.query("CALL sp_create_contactus(?,?,?,?,?,?)",
            [name, email, phone, subject,message,createdBy]
        );

        return result;
    },

    getAllContactus: async()=>{
        const [rows] = await db.query("CALL sp_get_all_contactus()");
        return rows[0];
    },

    // mark as read
    updateContactStatus: async ({ id,contact_status,updatedBy }) => {
        const [rows] = await db.query("CALL sp_update_contact_status(?,?,?)",
            [id,contact_status, updatedBy]
        );

        return rows;
    },

    deletContactUs: async(data)=>{
        const {id, updatedBy} =  data;

        const [rows] = await db.query("CALL sp_delete_contactus(?,?)",
            [id,updatedBy]
        );

        return rows;
    }
}