import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createCoreTeam, deleteCoreTeam, getAllCoreTeam, getMemberById, updateCoreTeam } from "../controller/core_team.controller.js";
import { upload } from "../middleware/upload.middlware.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin,upload("team").single("member_image") ,createCoreTeam);
router.get("/getall", getAllCoreTeam);
router.get("/get/memberdetails/:id", getMemberById);
router.put("/update/:id", verifyToken, verifyAdmin,upload("team").single("member_image"), updateCoreTeam);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteCoreTeam);

export default router;