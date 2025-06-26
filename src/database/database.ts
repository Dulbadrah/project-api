import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL!)
      .then(() => console.log("Database connect"));
  } catch (error) {
    return error;
  }
};
