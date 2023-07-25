import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import buildingRoutes from "./routes/buildingRoutes.js";
import floorRoutes from "./routes/floorRoutes.js";
import areaRoutes from "./routes/areaRoutes.js";
import deskRoutes from "./routes/deskRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { dbConnect } from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

dbConnect();

const app = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use("/user", userRoutes);
app.use("/city", cityRoutes);
app.use("/building", buildingRoutes);
app.use("/floor", floorRoutes);
app.use("/area", areaRoutes);
app.use("/desk", deskRoutes);
app.use("/booking", bookingRoutes);


// app.use("/images", express.static("./server/uploads"));

app.listen(3001, () => console.log("Server is up and running at port 3001"));
