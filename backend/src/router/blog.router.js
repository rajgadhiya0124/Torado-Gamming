import express from "express";
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createBlog, deleteBlog, getAllBlog, getBlogByCategory, getBlogById, getBlogByTag, updateBlog } from "../controller/blog.controller.js";
import { upload } from "../middleware/upload.middlware.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin,upload("blog").single("blog_image") ,createBlog);
router.get("/getAll", getAllBlog);
router.get("/getById/:id", getBlogById);
router.put("/update/:id", verifyToken, verifyAdmin,upload("blog").single("blog_image"), updateBlog);
router.delete("/delete/:id",verifyToken,verifyAdmin, deleteBlog);

router.get("/getblogByCat/:category_id",getBlogByCategory);
router.get("/getblogByTag/:tag_id", getBlogByTag);

export default router;
