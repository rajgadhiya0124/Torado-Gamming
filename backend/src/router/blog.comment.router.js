import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createBlogComment, deleteBlogComment, getAllComments, getCommentByBlog } from "../controller/blog.comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin, createBlogComment);
router.get("/getall", getAllComments);
router.get("/getByBlog/:blog_id", getCommentByBlog);

router.delete("/delete/:id",verifyToken, verifyAdmin, deleteBlogComment);

export default router;