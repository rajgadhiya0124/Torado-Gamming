import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createPlayer, deletePlayer, getAllPlayer, getPlayerById, getPlayerByTeam, updatePlayer } from "../controller/player.controller.js";
import { upload } from "../middleware/upload.middlware.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin,upload("player").single("player_image") ,createPlayer);
router.get("/getall", getAllPlayer);
router.get("/getbyId/:id", getPlayerById);
router.put("/update/:id", verifyToken, verifyAdmin, upload("player").single("player_image"), updatePlayer);
router.delete("/delete/:id", verifyToken, verifyAdmin , deletePlayer);

router.get("/getplayrByTeam/:team_id", getPlayerByTeam);

export default router;