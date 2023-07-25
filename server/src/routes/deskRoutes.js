import express from "express";
import { handleDeskAdd } from "../controllers/deskController.js";
import { handleDeskAll } from "../controllers/deskController.js";

import { Auth } from '../middleware/auth.js'


const router = express.Router();

router.post("/add", handleDeskAdd);
router.get("/all", handleDeskAll);



export default router;