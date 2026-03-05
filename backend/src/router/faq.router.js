import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createFaq, deleteFaq, getAllFaq, updateFaq } from "../controller/faq.controller.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin, createFaq);
router.get("/getall",getAllFaq);
router.put("/update/:id",verifyToken, verifyAdmin, updateFaq);
router.delete("/delete/:id",verifyToken, verifyAdmin, deleteFaq);

export default router;