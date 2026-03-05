import db from "../config/db.js"

export const faqModel = {

    createFaq: async(data)=>{
        const {question, answer, createdBy} = data;

        const [rows] = await db.query("CALL sp_create_faq(?,?,?)",
            [question, answer, createdBy]
        );

        return rows;
    },

    getAllFaq : async()=>{

        const [rows] = await db.query("CALL sp_get_all_faqs()");
        return rows[0];
    },

    updateFaq: async(data)=>{
        const {id,question,answer,updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_faq(?,?,?,?)",
            [id, question, answer,updatedBy]
        );

        return rows;
    },

    deleteFaq: async(data)=>{
        const {id,updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_faq(?,?)",
            [id,updatedBy]
        );

        return rows;
    }

}