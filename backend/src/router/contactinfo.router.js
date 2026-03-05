import express from "express"
import { createContactInfo, deleteContactInfo, getAllContactInfo, updateContactInfo } from "../controller/contactinfo.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create",verifyToken ,createContactInfo);
router.get("/getall",getAllContactInfo);
router.put("/update/:id", verifyToken,updateContactInfo);
router.delete("/delete/:id", verifyToken,deleteContactInfo);

export default router;