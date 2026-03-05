import { faqModel } from "../model/faq.model.js";

//cretae faq
export const createFaq = async(req,res)=>{
    try {
        const {question, answer} = req.body;
        const createdBy = req.user ? req.user.id : null;

        if(!question || !answer){
            res.status(401).json({
                success: false,
                message: "Question and answer required"
            })
        }

        await faqModel.createFaq({question, answer, createdBy});

        res.status(200).json({
            success: true,
            message: "Faq created"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all faq
export const getAllFaq = async(req,res)=>{
    try {

        const faq = await faqModel.getAllFaq();

        res.status(200).json({
            success: true,
            data: faq
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//update faq
export const updateFaq = async(req,res)=>{
    try {
        const id = req.params.id;
        const {question, answer} = req.body;
        const updatedBy = req.user ? req.user.id : null;

        const result =  await faqModel.updateFaq({id,question, answer, updatedBy});

        if (result[0][0].affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Faq Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Faq updated"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//delete faq
export const deleteFaq = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await faqModel.deleteFaq({id,updatedBy});

        if (result[0][0].affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Faq Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Faq deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
