import db from "../config/db.js";

export const partnerModel = {

    createPartner: async(data)=>{
        const {partner_name, partner_logo, partner_link, createdBy} = data;

        const [rows] = await db.query("CALL sp_create_partner(?,?,?,?)",
            [partner_name, partner_logo, partner_link, createdBy]
        );

        return rows;
    },

    getallPartner: async()=>{

        const [rows] = await db.query("CALL sp_get_all_partners()");

        return rows[0]
    },

    updatePartner: async(data)=>{
        const {id, partner_name, partner_logo, partner_link, updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_partner(?,?,?,?,?)",
            [id, partner_name, partner_logo, partner_link, updatedBy]
        );

        return rows;
    },
    
    deletePartner: async(data)=>{
        const {id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_partner(?,?)",
            [id, updatedBy]
        );

        return rows;
    }


}