import express from "express";
import { handleSignUp } from "../controllers/userController.js";
import { handleLogin } from "../controllers/userController.js";
import { handleUpdate } from '../controllers/userController.js'
import { handleLogout } from '../controllers/userController.js'
import { handleConfirm } from '../controllers/userController.js'
import { handleForgotPassword } from '../controllers/userController.js'
import { handleNewPassword } from '../controllers/userController.js'
import { Auth } from '../middleware/auth.js'


const router = express.Router();

router.post("/sign-up", handleSignUp);
router.post("/login", handleLogin);
router.patch("/update", Auth, handleUpdate);
router.post("/logout", handleLogout);
router.post("/email-confirm", handleConfirm);
router.post("/forgot-password", handleForgotPassword);
router.post("/create-new-password", handleNewPassword);


export default router;
