import { gameTeamModel } from "../model/gamming.team.model.js";

//create game team
export const createGameTeam = async(req,res)=>{
    try {
        const { team_name, team_tag,country, description, twitter_link, twitch_link, youtube_link} = req.body;
        const team_logo = req.file ? req.file.filename : null;
        const createdBy = req.user ? req.user.id : null;
        
        const result =  await gameTeamModel.createGamingTeam({team_name, team_logo, team_tag,country, 
            description,twitter_link, twitch_link, youtube_link, createdBy});

        res.status(201).json({
            success: true,
            message: "Team Created Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
   
//get all gaming teams
export const getallGamingTeam = async(req,res)=>{
    try {
        const result = await gameTeamModel.getAllGamingTeam();

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

//get gaming team by id
export const getGamingTeamById = async(req,res)=>{
    try {
        const id = req.params.id;

        const result = await gameTeamModel.getTeamById(id);

        if(!result){
            res.status(400).json({
                success: false,
                message: "Team Not exist or delete"
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

//update game team
export const updateGameTeam = async(req,res)=>{
    try {
        const id = req.params.id;
        const { team_name, team_tag,country, description, twitter_link, twitch_link, youtube_link} = req.body;
        const team_logo = req.file ? req.file.filename : null;
        const updatedBy = req.user ? req.user.id : null;
        
        const result =  await gameTeamModel.updategamingTeam({id,team_name, team_logo, team_tag,country, 
            description,twitter_link, twitch_link, youtube_link, updatedBy});

        if(result[0][0].affectedRows ===0){
            res.status(400).json({
                success: false,
                message: "Team not exists or deleted"
            });
        }

        res.status(201).json({
            success: true,
            message: "Team updated Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//delet team
export const deleteGameTeam = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;
        
        const result =  await gameTeamModel.deleteTeam({id,updatedBy});

        if(result[0][0].affectedRows ===0){
            res.status(400).json({
                success: false,
                message: "Team not exists or deleted"
            });
        }

        res.status(201).json({
            success: true,
            message: "Team deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}