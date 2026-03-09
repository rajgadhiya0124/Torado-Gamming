import express from "express"
import { verifyAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { createMatch, deleteMatch, getMatchById, getMatchByMatchStatus, updateMatchInfo, updateMatchScore } from "../controller/match.controller.js";
import { uploadNone } from "../middleware/upload.middlware.js";


const router = express.Router();

router.post("/create", verifyToken, verifyAdmin,uploadNone.none(), createMatch);
router.get("/getById/:id", getMatchById);
router.put("/update/matchinfo/:match_id", verifyToken,verifyAdmin, uploadNone.none(), updateMatchInfo);
router.put("/update/matchScore/:match_id", verifyToken,verifyAdmin, uploadNone.none(), updateMatchScore);
router.delete("/delete/:match_id",verifyToken, verifyAdmin, deleteMatch);

router.get("/getmatch", getMatchByMatchStatus)

export default router;