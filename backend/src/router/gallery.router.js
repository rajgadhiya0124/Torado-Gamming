import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middlware.js";
import { createGallery, deleteGallery, getAllGallery } from "../controller/gallery.controller.js";

const router = express.Router();

router.post("/create",verifyToken,verifyAdmin, upload("gallery").single("gallery_image"), createGallery);
router.get("/getall", getAllGallery);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteGallery);

export default router;