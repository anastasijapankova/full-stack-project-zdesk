import express from "express";
// import { handleCityAll } from "../controllers/cityController.js";
import { handleCityAdd } from "../controllers/cityController.js";

import { Auth } from '../middleware/auth.js'


const router = express.Router();

// router.get("/all", handleCityAll);
router.post("/add", handleCityAdd);



export default router;