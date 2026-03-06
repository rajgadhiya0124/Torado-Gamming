import db from "../config/db.js";

export const playerModel = {

    createPlayerModel : async(data)=>{
        const { team_id, player_name,  player_image, player_role, player_bio,
        player_country, player_twitter, player_instagram,player_twitch,createdBy } = data;

        const [rows] = await db.query("CALL sp_create_player(?,?,?,?,?,?,?,?,?,?)",
            [team_id, player_name,  player_image, player_role, player_bio,
            player_country, player_twitter, player_instagram,player_twitch,createdBy]
        );

        return rows;
    },

    getAllPlayer: async()=>{
        const [rows] = await db.query("CALL sp_get_all_players()");

        return rows[0];
    },

    getPlayerById : async(id)=>{
        const [rows] = await db.query("CALL sp_get_palyer_by_id(?)",
            [id]
        );

        return rows[0][0];
    },

    updatePlayer: async(data)=>{
        const {id,team_id, player_name,  player_image, player_role, player_bio,
        player_country, player_twitter, player_instagram,player_twitch,updatedBy } = data;

        const [rows] = await db.query("CALL sp_update_player(?,?,?,?,?,?,?,?,?,?,?)",
            [id, team_id, player_name,  player_image, player_role, player_bio,
            player_country, player_twitter, player_instagram,player_twitch,updatedBy]
        );
        return rows;
    },

    deletePlayer: async(data)=>{
        const {id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_player(?,?)",
            [id, updatedBy]
        );

        return rows;
    },

    getallPlayerByTeam : async(team_id)=>{

        const [rows] = await db.query("CALL sp_get_players_by_team(?)",
            [team_id]
        );

        return rows[0];
    }
}