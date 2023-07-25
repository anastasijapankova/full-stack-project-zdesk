import express from "express";
import { handleBookingAdd, handleBookingUser, handleBookingCheck, handleBookingDelete } from "../controllers/bookingController.js";


import { Auth } from '../middleware/auth.js'


const router = express.Router();

router.post("/add", Auth, handleBookingAdd);
router.get("/user", Auth, handleBookingUser);
router.get("/check", Auth, handleBookingCheck);
router.delete("/delete", Auth, handleBookingDelete);



export default router;