import express from "express";
// import { handleCityAll } from "../controllers/cityController.js";
import { handleFloorAdd } from "../controllers/floorController.js";

import { Auth } from '../middleware/auth.js'

const router = express.Router();

// router.get("/all", handleCityAll);
router.post("/add", handleFloorAdd);



export default router;