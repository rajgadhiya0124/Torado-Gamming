import { BlogCategoryModel } from "../model/blog.category.model.js";

//create blog category
export const createBlogCategory = async(req,res)=>{
    try {
        const {category_name, category_slug} = req.body;
        const createdBy = req.user ? req.user.id : null;

        await BlogCategoryModel.createBlogCategory({category_name,category_slug,createdBy});

        res.status(200).json({
            success: true,
            message: "Blog Category create"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all blog category
export const getAllBlogCategory = async(req,res)=>{
    try {

        const blogCategory = await BlogCategoryModel.getAllBlogCategory();

        res.status(200).json({
            success: true,
            data: blogCategory
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//updated blog category
export const updateBlogCategory = async(req,res)=>{
    try {
        const id = req.params.id;
        const { category_name, category_slug} = req.body;
        const updatedBy = req.user ? req.user.id : null; 

        await BlogCategoryModel.updateBlogCategory({id,category_name,category_slug,updatedBy});

        res.status(200).json({
            success: true,
            message: "Blog Category Updated"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//delete blog category
export const deleteBlogCategory = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null; 

        await BlogCategoryModel.deleteBlogCategory({id,updatedBy});

        res.status(200).json({
            success: true,
            message: "Blog Category Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}