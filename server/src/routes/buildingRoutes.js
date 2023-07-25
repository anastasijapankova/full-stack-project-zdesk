import express from "express";
// import { handleCityAll } from "../controllers/cityController.js";
import { handleBuildingAdd } from "../controllers/buildingController.js";

import { Auth } from '../middleware/auth.js'


const router = express.Router();

// router.get("/all", handleCityAll);
router.post("/add", handleBuildingAdd);



export default router;