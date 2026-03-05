import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createBlogCategory, deleteBlogCategory, getAllBlogCategory, updateBlogCategory } from "../controller/blog.category.controller.js";

const router = express.Router();

router.post("/create",verifyToken,verifyAdmin, createBlogCategory);
router.get("/getall", getAllBlogCategory);
router.put("/update/:id", verifyToken, verifyAdmin,updateBlogCategory);
router.delete("/delete/:id",verifyToken,verifyAdmin, deleteBlogCategory);

export default router;