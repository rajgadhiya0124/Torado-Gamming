import { partnerModel } from "../model/partner.model.js";

//create partner
export const createPartner = async(req,res)=>{
    try {
        const {partner_name, partner_link} = req.body;
        const partner_logo = req.file ? req.file.filename : null;
        const createdBy = req.user ? req.user.id : null;

        if(!partner_name || !partner_logo || !partner_link){
            res.status(401).json({
                success: false,
                message: "All felid are required"
            })
        }

        await partnerModel.createPartner({partner_name, partner_logo, partner_link, createdBy});

        res.status(200).json({
            success: true,
            message: "Partner created"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all partner
export const getAllPartner = async(req,res)=>{
    try {

        const partner = await partnerModel.getallPartner();

        res.status(200).json({
            success: true,
            data: partner
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//update partner
export const updatePartner = async(req,res)=>{
    try {
        const id = req.params.id;
        const {partner_name, partner_link} = req.body;
        const partner_logo = req.file ? req.file.filename : null;
        const updatedBy = req.user ? req.user.id : null;

        const result = await partnerModel.updatePartner({id, partner_name, partner_logo, 
            partner_link, updatedBy});

        if(result[0][0].affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: "Partner Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Partner updated"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//delete partner
export const deletePartner = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await partnerModel.deletePartner({id,updatedBy});

        if(result[0][0].affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: "Partner Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Partner deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}