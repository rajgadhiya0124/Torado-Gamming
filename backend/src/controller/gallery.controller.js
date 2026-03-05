import { galleryModel } from "../model/gallery.model.js";

//create gallery
export const createGallery = async(req,res)=>{
    try {
        const gallery_image = req.file ? req.file.filename : null;
        const createdBy = req.user ? req.user.id : null;

        if(!gallery_image){
            res.status(401).json({
                success: false,
                message: "gallery_image required"
            })
        }

        await galleryModel.createGallery({gallery_image, createdBy});

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

//get all gallery
export const getAllGallery = async(req,res)=>{
    try {

        const gallery = await galleryModel.getAllGallery();

        res.status(200).json({
            success: true,
            data: gallery
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//delete gallery
export const deleteGallery = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await galleryModel.deleteGallery({id, updatedBy});

        if(result[0][0].affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: "Gallery Not exists or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Gallery Deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}