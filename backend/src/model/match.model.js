import db from "../config/db.js";

export const matchModel = {

    createMatch: async(data)=>{
        const {tournament_id, team1_id,team2_id, match_date,match_time, match_info,
            youtube_stream, twitch_stream, createdBy} = data;
        
        const [rows] = await db.query("CALL sp_create_match(?,?,?,?,?,?,?,?,?)",
            [tournament_id, team1_id,team2_id, match_date,match_time,match_info,
            youtube_stream, twitch_stream, createdBy]
        );

        return rows;
    },

    getmatchByMatchStatus : async(data)=>{
        const {match_status} = data;

        const [rows] = await db.query("CALL sp_get_match_byStatus(?)",
            [match_status]
        );

        return rows[0];
    },

    //get single match details
    getMatchById : async(id)=>{

        const [rows] = await db.query("CALL sp_get_match_by_id(?)",
            [id]
        );

        return rows[0][0]
    },

    updateMatchInfo: async(data)=>{
        const {match_id, tournament_id, team1_id,team2_id, match_date,match_time, match_info,
            youtube_stream, twitch_stream, updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_match_info(?,?,?,?,?,?,?,?,?,?)",
            [match_id, tournament_id, team1_id,team2_id, match_date,match_time, match_info,
            youtube_stream, twitch_stream, updatedBy]
        );

        return rows;
    },

    updateMatchScore: async(data)=>{
        const {match_id, team1_score, team2_score, winner_team_id, match_status, updatedBy } = data;

        const [rows] = await db.query("CALL sp_update_match_score(?,?,?,?,?,?)",
            [match_id, team1_score, team2_score, winner_team_id, match_status, updatedBy]
        );

        return rows;
    },

    deleteMatch: async(data)=>{
        const {match_id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_match(?,?)",
            [match_id, updatedBy]
        );

        return rows;
    }
}