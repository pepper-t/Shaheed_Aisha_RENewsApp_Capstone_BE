
//I went back to mongoose

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";


async function connectDB() {
  try {
    await mongoose.connect(connectionStr);

    console.log(`MongoDB Connected...`)
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;


/*
 //Import Libraries
 import mongoose from 'mongoose';
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//Set/configure dotenv
dotenv.config();

//Get connection string from MongoDb
const connectionStr = process.env.MONGO_URI || "";

//Setup Mongo Client

const client = new MongoClient(connectionStr);

let conn;   
//let db;


  try {
  conn=await client.connect();

    console.log(`MongoDB Connected...`)



//await createIndexSetup();
  //await createSignUpSchema();

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
let db = conn.db("RealEstateNews_SignUps");//MongoDB database at site

*/

/*async function createIndexSetup() {
  const signups = db.collection("signups");//index for the quotes collection

  await signups.createIndex({ name: -1 });
  await signups.createIndex({ email: 1 });//, { unique: true });
  }

async function createSignUpSchema() {  
  await db.command({
    collMod: "signups",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email"],

        properties: {
          name: {
            bsonType: "string",
          },
          email: {
            bsonType: "string",
            description: "email address is required and must be a string",
          }
          
          }
        }
      }
    });
}
*/

//export default db;



//originally 'export default connectDB;' This is for mongoose. db is for MongoDB