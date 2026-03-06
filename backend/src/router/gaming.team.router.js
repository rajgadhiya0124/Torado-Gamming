import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middlware.js";
import { createGameTeam, deleteGameTeam, getallGamingTeam, getGamingTeamById, updateGameTeam } from "../controller/gamming.team.controller.js";

const router = express.Router();

router.post("/newTeam/create", verifyToken, verifyAdmin,upload("game-team").single("team_logo"), createGameTeam);
router.get("/getall", getallGamingTeam);
router.get("/get/teamdetails/:id", getGamingTeamById);
router.put("/update/:id", verifyToken, verifyAdmin,upload("game-team").single("team_logo"), updateGameTeam);
router.delete("/delete/:id", verifyToken, verifyAdmin , deleteGameTeam);

export default router;