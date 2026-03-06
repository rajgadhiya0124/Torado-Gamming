import { coreTeamModel } from "../model/core_team.model.js";

//create core team
export const createCoreTeam = async(req,res)=>{
    try {
        const { member_name, member_role, member_bio, member_twitter ,member_instagram ,member_linkedin } = req.body;
        const member_image = req.file ? req.file.filename : null;
        const createdBy = req.user ? req.user.id : null;

        if (!member_name || !member_role || !member_image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const result = await coreTeamModel.createCoreTeam({member_name, member_role, member_image, 
            member_bio,member_twitter ,member_instagram ,member_linkedin ,createdBy});

        res.status(201).json({
            success: true,
            message: "core team member created",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get all core team
export const getAllCoreTeam = async(req,res)=>{
    try {

        const result = await coreTeamModel.getAllCoreTeam();

        res.status(200).json({
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


//get core team mber by id
export const getMemberById = async(req,res)=>{
    try {
        const id = req.params.id;

        const result = await coreTeamModel.getTeamById(id);

        if(!result){
            return res.status(401).json({
                success: false,
                message: "team Member not existes"
            });
        }

        res.status(200).json({
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

//update core team 
export const updateCoreTeam = async(req,res)=>{
    try {
        const id = req.params.id;
        const { member_name, member_role, member_bio, member_twitter ,member_instagram ,member_linkedin} = req.body;
        const member_image = req.file ? req.file.filename : null;
        const updatedBy = req.user ? req.user.id : null;

        const result = await coreTeamModel.updateCoreTeam({id, member_name, member_role, member_image ,member_bio,
            member_twitter ,member_instagram ,member_linkedin, updatedBy
        });

        if(result[0][0].affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: "Team Members Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Team member Updated"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//delete core team 
export const deleteCoreTeam = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await coreTeamModel.deletedCoreTeam({id, updatedBy});

        if(result[0][0].affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: "Team Members Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Team member deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}