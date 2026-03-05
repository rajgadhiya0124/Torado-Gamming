import express from "express"
import { createContactus, deleteContactUs, getAllContactUs, updateContactStatus, } from "../controller/contactus.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", createContactus);
router.get("/getall",getAllContactUs);

router.patch("/:id/status",verifyToken,updateContactStatus);

router.delete("/delete/:id",verifyToken,deleteContactUs);

export default router;