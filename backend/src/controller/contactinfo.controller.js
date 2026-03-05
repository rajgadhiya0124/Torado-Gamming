import { ContactInfoModel } from "../model/contactinfo.model.js";



//create contact info
export const createContactInfo = async (req, res) => {
    try {
        const {contactinfo_type, contactinfo_title, contactinfo_value} = req.body;
        const createdBy = 1;

        const result = await ContactInfoModel.createContactInfo({contactinfo_type, contactinfo_title, 
            contactinfo_value,createdBy});

        res.status(201).json({
            success: true,
            message: "Contact info created successfully",
            data: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            message: error.message  
    });
    }
};

//get all contact info
export const getAllContactInfo = async (req, res) => {
    try {
        const result = await ContactInfoModel.getAllContactInfo();

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// UPDATE contact info
export const updateContactInfo = async (req, res) => {
    try {
        const id  = req.params.id;
        const {contactinfo_type, contactinfo_title, contactinfo_value} = req.body;
        const updatedBy =  req.user ? req.user.id : null;

        await ContactInfoModel.updateContactInfo({id,contactinfo_type, contactinfo_title, 
            contactinfo_value, updatedBy});

        res.status(200).json({
            success: true,
            message: "Contact info updated successfully",
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message
        });
    }
};

// delete contact info
export const deleteContactInfo = async (req, res) => {
    try {
        const id  = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        await ContactInfoModel.deleteContactInfo({id,updatedBy});

        res.status(200).json({
            success: true,
            message: "Contact info deleted successfully",
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message
        });
    }
};
