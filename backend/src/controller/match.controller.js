import { matchModel } from "../model/match.model.js"

//create a match
export const createMatch = async(req,res)=>{
    try {
        
        const {tournament_id , team1_id,team2_id, match_date,match_time, match_info, youtube_stream, twitch_stream } = req.body;

        const tournamentId = tournament_id === "" ? null : tournament_id;
        const createdBy = req.user ? req.user.id : null; 

        const result =await matchModel.createMatch({tournament_id :tournamentId, team1_id,team2_id, 
            match_date,match_time,match_info,youtube_stream, twitch_stream, createdBy});

        res.status(201).json({
            success: true,
            message: "New Match created"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//get match by match status
export const getMatchByMatchStatus = async(req,res)=>{
    try {
        const match_status = req.query.match_status || "all";

        const result = await matchModel.getmatchByMatchStatus({match_status});

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//get single match details
export const getMatchById = async(req,res)=>{
    try {
        const id = req.params.id;

        const result =await matchModel.getMatchById(id);

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//update match info
export const updateMatchInfo = async(req,res)=>{
    try {
        const match_id = req.params.match_id;
        const {tournament_id , team1_id,team2_id, match_date,match_time, 
            match_info, youtube_stream, twitch_stream} = req.body;

        const tournamentId = tournament_id === "" ? null : tournament_id;

        const updatedBy = req.user ? req.user.id : null;

        const result = await matchModel.updateMatchInfo({match_id,tournament_id: tournamentId , 
            team1_id,team2_id, match_date,match_time, 
            match_info, youtube_stream, twitch_stream, updatedBy});


        if(result[0][0].affectedRows === 0){
            res.status(400).json({
                success: false,
                message: "Match note Exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Match Info updated"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//update match score and match status
export const updateMatchScore = async(req,res)=>{
    try {
        const match_id = req.params.match_id;
        const {team1_score, team2_score, winner_team_id, match_status} = req.body;

        const updatedBy = req.user ? req.user.id : null;

        const result = await matchModel.updateMatchScore({match_id, team1_score, team2_score, 
            winner_team_id, match_status, updatedBy});


        if(result[0][0].affectedRows === 0){
            res.status(400).json({
                success: false,
                message: "Match note Exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Match Info updated"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//delete match
export const deleteMatch = async(req,res)=>{
    try {
        const match_id = req.params.match_id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await matchModel.deleteMatch({match_id, updatedBy});

        if(result[0][0].affectedRows === 0){
            res.status(400).json({
                success: false,
                message: "Match note Exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Match deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}