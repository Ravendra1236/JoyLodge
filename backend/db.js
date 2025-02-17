
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To DB successfully.");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});
