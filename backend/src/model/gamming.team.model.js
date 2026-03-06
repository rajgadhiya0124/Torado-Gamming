import db from "../config/db.js";

export const gameTeamModel = {

    createGamingTeam : async(data)=>{
        const { team_name, team_logo, team_tag,country, description,
        twitter_link, twitch_link, youtube_link, createdBy } = data;

        const [rows] = await db.query("CALL sp_create_gaming_team(?,?,?,?,?,?,?,?,?)",
            [team_name, team_logo, team_tag,country, description,
            twitter_link, twitch_link, youtube_link, createdBy]
        );

        return rows;
    },

    getAllGamingTeam : async()=>{

        const [rows] = await db.query("CALL sp_get_all_gaming_teams()");
        return rows[0];
    },

    getTeamById: async(id)=>{
        const [rows] = await db.query("CALL sp_get_gaming_team_by_id(?)",
            [id]
        );

        return rows[0][0];
    },

    updategamingTeam : async(data)=>{
        const {id, team_name, team_logo, team_tag,country, description,
        twitter_link, twitch_link, youtube_link, updatedBy } = data;

        const [rows] = await db.query("CALL sp_update_gaming_team(?,?,?,?,?,?,?,?,?,?)",
            [id,team_name, team_logo, team_tag,country, description,
            twitter_link, twitch_link, youtube_link, updatedBy]
        );

        return rows;
    },

    deleteTeam: async(data)=>{
        const {id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_gaming_team(?,?)",
            [id,updatedBy]
        );

        return rows;
    }

}