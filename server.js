//Via mongoose

// Imports
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js";
import userRoutes from "./routes/userRoutes.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/users", userRoutes);

// Global Err
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});

/*
// Imports
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middlewares/middleware.js";
import reNewsSignUps from "./routes/reNewsSignUps.js";
//import db from "./db/conn.js";


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
//connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/signups", reNewsSignUps);//signup routes

// Global Err
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});

*/
