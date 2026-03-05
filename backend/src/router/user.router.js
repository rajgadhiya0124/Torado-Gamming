import express from "express"
import { deleteUser, loginUser, registerUser } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);
router.delete("/delete/:id",verifyToken,deleteUser);

export default router;