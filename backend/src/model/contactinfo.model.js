import db from "../config/db.js";


export const ContactInfoModel = {

    createContactInfo: async(data)=>{
        const {contactinfo_type, contactinfo_title, contactinfo_value,createdBy} = data;

        const [rows] = await db.query("CALL sp_create_contact_info (?,?,?,?)",
            [contactinfo_type,contactinfo_title,contactinfo_value,createdBy]
        )
        return rows;
    },

    getAllContactInfo: async()=>{
        const [rows] = await db.query("CALL sp_get_all_contact_info()");

        return rows[0];
    },

    updateContactInfo: async(data)=>{
        const {id,contactinfo_type,contactinfo_title,contactinfo_value,updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_contact_info(?,?,?,?,?)",
            [id, contactinfo_type,contactinfo_title,contactinfo_value,updatedBy]
        );

        return rows;
    },

    deleteContactInfo: async(data)=>{
        const {id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_contact_info(?,?)",
            [id,updatedBy]
        );
        return rows
    }
    
}