import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createBlogTag, deleteBlogTag, getallBlogTag, updateBlogTag } from "../controller/blog.tag.controller.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin, createBlogTag);
router.get("/getall", getallBlogTag);
router.put("/update/:id", verifyToken, verifyAdmin, updateBlogTag);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteBlogTag);

export default router;