import db from "../config/db.js"

export const coreTeamModel = {

    createCoreTeam: async(data)=>{
        const {member_name, member_role,member_image, member_bio, 
            member_twitter ,member_instagram ,member_linkedin, createdBy} = data;

        const [rows] = await db.query("CALL sp_create_coreteam(?,?,?,?,?,?,?,?)",
            [   member_name, member_role, member_image, member_bio, 
                member_twitter ,member_instagram ,member_linkedin, createdBy]
        );

        return rows;
    },
    getAllCoreTeam : async()=>{

        const [rows] = await db.query("CALL sp_get_all_coreteam()");

        return rows[0];
    },

    getTeamById : async(id)=>{
        const [rows] = await db.query("CALl sp_get_coreteam_by_id(?)",
            [id]
        );

        return rows[0][0];
    },

    updateCoreTeam: async(data)=>{
        const {id, member_name, member_role,member_image, member_bio, 
            member_twitter ,member_instagram ,member_linkedin ,updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_coreteam(?,?,?,?,?,?,?,?,?)",
            [id, member_name, member_role,member_image, member_bio,
                member_twitter ,member_instagram ,member_linkedin, updatedBy]
        );

        return rows;
    },

    deletedCoreTeam: async(data)=>{
        const {id,updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_coreteam(?,?)",
            [id, updatedBy]
        );
        return rows;
    }
}