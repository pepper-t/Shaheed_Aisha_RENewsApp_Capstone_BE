
import mongoose from "mongoose";
import dotenv from "dotenv";
import Subscriber from "../models/userSchema.js"
import data from "./data.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await Subscriber.deleteMany({});
    console.log('✅ Deleted Previous')

    await Subscriber.create(data);
    console.log('✅ Added New Subs')

    console.log('🎉Successfully Seeded!')
    process.exit(1);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

seedDatabase();