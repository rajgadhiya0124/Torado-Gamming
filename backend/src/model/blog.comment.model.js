import db from "../config/db.js";


export const blogcommentModel = {

    createBlogComment: async(data)=>{
        const {blog_id, name, email, website_link, comment, createdBy} = data;

        const [rows] = await db.query("CALL sp_create_blog_comment(?,?,?,?,?,?)",
            [blog_id, name, email, website_link, comment, createdBy]
        );

        return rows;
    },

    getAllBlogComment: async()=>{
        const [rows] = await db.query("CALL sp_get_all_blog_comments()");

        return rows[0];
    },

    getCommentByBlog: async(blog_id)=>{
        const [rows] = await db.query("CALL sp_get_comments_by_blog(?)",
            [blog_id]
        );

        return rows[0];
    },

    deleteBlogComment: async(data)=>{
        const {id,updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_blog_comment(?,?)",
            [id,updatedBy]
        );

        return rows;
        
    }
}