import { BlogTagModel } from "../model/blog.tag.model.js";

//create blog tag
export const createBlogTag = async(req,res)=>{
    try {
        const { tag_name, tag_slug } = req.body;
        const createdBy = req.user ? req.user.id : null;

        await BlogTagModel.createBlogTag({tag_name, tag_slug,createdBy});

        res.status(200).json({
            success: true,
            message: "Blog Tag Created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all blogs tag
export const getallBlogTag = async(req,res)=>{
    try {

        const blogTags = await BlogTagModel.getAllBlogTag();

        res.status(200).json({
            success: true,
            data: blogTags
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//update blogs tag
export const updateBlogTag = async(req,res)=>{
    try {
        const id = req.params.id;
        const { tag_name, tag_slug } = req.body;
        const updatedBy = req.user ? req.user.id : null;

        await BlogTagModel.updateBlogTag({ id,tag_name,tag_slug,updatedBy });

        res.status(200).json({
            success: true,
            message: "Blog Tag Updated"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//delete blogs tag
export const deleteBlogTag = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        await BlogTagModel.deleteBlogTag({ id,updatedBy });

        res.status(200).json({
            success: true,
            message: "Blog Tag Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}