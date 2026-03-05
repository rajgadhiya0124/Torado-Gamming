import { BlogModel } from "../model/blog.model.js";


//create blog
export const createBlog = async (req, res) => {
    try {
        const {category_id,tag_id, blog_title,blog_date, blog_content} = req.body;
        const createdBy = req.user ? req.user.id : null;

        let blog_image = null;
        if (req.file) {
            blog_image = req.file.filename;
        }


        await BlogModel.createBlog({category_id,tag_id, blog_title,blog_image,blog_date,
            blog_content,createdBy});

        res.status(201).json({
            success: true,
            message: "Blog created successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get all blog (status=0 and 1 both)
export const getAllBlog = async (req, res) => {
    try {

        const blog = await BlogModel.getAllBlog();

        res.status(201).json({
            success: true,
            data : blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//get blog by id
export const getBlogById = async (req, res) => {
    try {
        const id = req.params.id;

        const blog = await BlogModel.getBlogById(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//update Bolog
export const updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const {category_id,tag_id, blog_title,blog_date, blog_content} = req.body;
        const blog_image = req.file ? req.file.filename : null;
        const updatedBy = req.user ? req.user.id : null;

        await BlogModel.updateBlog({id,category_id,tag_id, blog_title,blog_image,blog_date, 
            blog_content,updatedBy
        });

        res.status(200).json({
            success: true,
            message: "Blog updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//delete Blog
export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBy = req.user ? req.user.id : null;

        await BlogModel.deleteBlog({id,updatedBy});

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get blog by category
export const getBlogByCategory = async (req, res) => {
    try {
        const category_id = req.params.category_id;

        const blog = await BlogModel.getBlogByCategory(category_id);

        if (blog.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get blog by category
export const getBlogByTag = async (req, res) => {
    try {
        const tag_id = req.params.tag_id;

        const blog = await BlogModel.getBlogByTag(tag_id);

        if (blog.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};