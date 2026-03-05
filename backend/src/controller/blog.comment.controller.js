import { blogcommentModel } from "../model/blog.comment.model.js";

//create blog comments
export const createBlogComment = async(req,res)=>{
    try {
        
        const { blog_id, name, email, website_link, comment } = req.body;
        const createdBy = req.user ? req.user.id : null;

        await blogcommentModel.createBlogComment({blog_id,name,  email, website_link,comment,createdBy});

        res.status(201).json({
            success: true,
            message: "Comment submitted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//get all comments
export const getAllComments = async (req, res) => {
    try {
        const comments = await blogcommentModel.getAllBlogComment();

        res.status(200).json({
            success: true,
            data: comments
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//get comment by blog
export const getCommentByBlog = async (req, res) => {
    try {
        const blog_id = req.params.blog_id;

        const comments = await blogcommentModel.getCommentByBlog(blog_id);

        if(comments.length === 0){
            return res.status(400).json({
                success: false,
                message: "No comments found"
            });
        }

        res.status(200).json({
            success: true,
            data: comments
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//delete blog comment
export const deleteBlogComment = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        const result = await blogcommentModel.deleteBlogComment({id, updatedBy});

        if (result[0][0].affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Blog Comment not found Or deleted"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog Commment deleted",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};