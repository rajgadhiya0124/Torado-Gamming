import db from "../config/db.js";

export const galleryModel = {
    
    createGallery: async(data)=>{
        const {gallery_image, createdBy} = data;

        const [rows] = await db.query("CALL sp_create_gallery(?,?)",
            [gallery_image,createdBy]
        );

        return rows;
    },

    getAllGallery : async()=>{

        const [rows] = await db.query("CALL sp_get_all_gallery()");
        return rows[0];
    },

    deleteGallery: async(data)=>{
        const {id,updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_gallery(?,?)",
            [id, updatedBy]
        );
        return rows;
    }
}