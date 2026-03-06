import { playerModel } from "../model/player.model.js";

//create new palyer
export const createPlayer = async(req,res)=>{
    try {
        const {team_id, player_name, player_role, player_bio,player_country, 
            player_twitter, player_instagram, player_twitch} = req.body;

        const player_image = req.file ? req.file.filename : null;
        const createdBy = req.user ? req.user.id : null;
        
        const result =  await playerModel.createPlayerModel({team_id, player_name,player_image, 
            player_role, player_bio, player_country, player_twitter, player_instagram,player_twitch, createdBy});

        res.status(201).json({
            success: true,
            message: "Player Created Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get all palyer
export const getAllPlayer = async(req,res)=>{
    try {

        const result =  await playerModel.getAllPlayer();

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get player by id  single palyer
export const getPlayerById = async(req,res)=>{
    try {
        const id = req.params.id;

        const result =  await playerModel.getPlayerById(id);

        if(!result){
            res.status(400).json({
                success: false,
                message: "Player Not exist or delete"
            });
        }

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//update palyer
export const updatePlayer = async(req,res)=>{
    try {
        const id = req.params.id;
        const {team_id, player_name, player_role, player_bio,player_country, 
            player_twitter, player_instagram, player_twitch} = req.body;

        const player_image = req.file ? req.file.filename : null;
        const updatedBy = req.user ? req.user.id : null;
        
        const result =  await playerModel.updatePlayer({id, team_id, player_name,player_image, 
            player_role, player_bio, player_country, player_twitter, player_instagram,player_twitch, updatedBy});

        if(result[0][0].affectedRows === 0){
            res.status(400).json({
                success: false,
                message: "Player not exists or deleted"
            });
        }

        res.status(201).json({
            success: true,
            message: "Player updated Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//delete palyer
export const deletePlayer = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;
        
        const result =  await playerModel.deletePlayer({id, updatedBy});

        if(result[0][0].affectedRows === 0){
            res.status(400).json({
                success: false,
                message: "Player not exists or deleted"
            });
        }

        res.status(201).json({
            success: true,
            message: "Player updated Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get all player by team 

//get player by id  single palyer
export const getPlayerByTeam = async(req,res)=>{
    try {
        const team_id = req.params.team_id;

        const result =  await playerModel.getallPlayerByTeam(team_id);

        if(!result){
            res.status(400).json({
                success: false,
                message: "Player Not exist or delete"
            });
        }

        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}