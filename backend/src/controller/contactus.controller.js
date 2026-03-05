import { contactUsModel } from "../model/contactus.model.js";
import { sendEmail } from "../services/nodemailer.js";

//crete contactus
export const createContactus = async(req,res)=>{
    try {
        const {name, email,phone,subject,message} = req.body;
        const createdBy = req.user ? req.user.id : 1;

        if (!name || !email || !message || !phone) {
            return res.status(400).json({
                success: false,
                message: "Name, Email and Message are required"
            });
        }

        await sendEmail({
            to:email,
            subject: "We Receive your Message",
            html:
                `
                <div style="font-family: Arial, sans-serif;">
                    <h2>Hello, ${name},</h2>
                    <p>Thank you for contacting us.</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p>We have received your message and will get back to you shortly.</p>
                    <br/>
                    <p>Regards,<br/><strong>Support Team</strong></p>
                </div> 
                `
        })

        await contactUsModel.createContactUs({name,email,phone,subject,message,createdBy})

        res.status(201).json({
            success: true,
            message: "Contact Form Submitted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//get all contactus
export const getAllContactUs = async(req,res)=>{
    try {
        const contacts = await contactUsModel.getAllContactus();

        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//mark as read 
export const updateContactStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const {contact_status} = req.body;
        const updatedBy = req.user?.id || 1; // Replace with real auth later

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Contact ID is required"
            });
        }

        await contactUsModel.updateContactStatus({ id, contact_status, updatedBy });

        res.status(200).json({
            success: true,
            message: "Contact status updated"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//delete contactus
export const deleteContactUs = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        await contactUsModel.deletContactUs({id,updatedBy});

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}