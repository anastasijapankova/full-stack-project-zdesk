import express from "express";
// import { handleCityAll } from "../controllers/cityController.js";
import { handleAreaAdd } from "../controllers/areaController.js";

import { Auth } from '../middleware/auth.js'


const router = express.Router();

// router.get("/all", handleCityAll);
router.post("/add", handleAreaAdd);



export default router;