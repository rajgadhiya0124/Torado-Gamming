import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js"
import { createPartner, deletePartner, getAllPartner, updatePartner } from "../controller/partner.controller.js";
import { upload } from "../middleware/upload.middlware.js";

const router = express.Router();

router.post("/create", verifyToken,verifyAdmin,upload("partner").single("partner_logo") ,createPartner);
router.get("/getall", getAllPartner);
router.put("/update/:id",verifyToken, verifyAdmin,upload("partner").single("partner_logo"), updatePartner);
router.delete("/delete/:id", verifyToken, verifyAdmin, deletePartner);

export default router;