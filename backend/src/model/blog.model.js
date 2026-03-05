import db from "../config/db.js";

export const BlogModel = {

    createBlog: async(data)=>{
        const {category_id,tag_id, blog_title,blog_image,blog_date,blog_content,createdBy} = data;

        const [rows] = await db.query("CALL sp_create_blog(?,?,?,?,?,?,?)",
            [category_id,tag_id, blog_title,blog_image,blog_date,blog_content,createdBy]
        );

        return rows;
    },

    //get all (status= 0 and 1 both)
    getAllBlog: async()=>{
        const [rows] = await db.query("CALL sp_get_all_blogs()");
        return rows[0];
    },

    getBlogById: async(id)=>{
        const [rows] = await db.query("CALL sp_get_blog_by_id(?)",
            [id]
        );
        return rows[0][0];
    },

    updateBlog: async(data)=>{
        const {id, category_id,tag_id, blog_title,blog_image,blog_date,blog_content,updatedBy} = data;

        const [rows] = await db.query("CALL sp_update_blog(?,?,?,?,?,?,?,?)",
            [id,category_id,tag_id, blog_title,blog_image,blog_date,blog_content,updatedBy]
        );

        return rows;
    },

    deleteBlog : async(data)=>{
        const {id, updatedBy} = data;

        const [rows] = await db.query("CALL sp_delete_blog(?,?)",
            [id,updatedBy]
        );

        return rows;
    },

    getBlogByCategory: async(category_id)=>{

        const [rows]= await db.query("CALL sp_get_blogs_by_category(?)",
            [category_id]
        );

        return rows[0];
    },

    getBlogByTag: async(tag_id)=>{

        const [rows]= await db.query("CALL sp_get_blogs_by_tag(?)",
            [tag_id]
        );

        return rows[0];
    }
}
