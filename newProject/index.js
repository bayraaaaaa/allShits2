import express from "express";
// import { MONGO_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./router/post.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const MONGO_URL = process.env.MONGO_URL || "";
const PORT = process.env.PORT || 696969;
app.use(express.json());
app.use(cors());
app.use("/posts", router);
const connect = () => {
  try {
    mongoose.connect(MONGO_URL, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connect();
  console.log(`Server running ${PORT}`);
});
