// import mongoose from "mongoose";

// const MONGODB_URL = process.env.DB_URL1;

// const dbConnect = async () => {
//   mongoose.set("strictQuery", false);
//   mongoose.set("bufferCommands", false);
//   if (mongoose.connections[0].readyState) {
//     return console.log("DB already Connected");
//   }
//   console.log("MONGODB_URL");
//   await mongoose
//     .connect(
//       "mongodb+srv://serverBoiler:BrxyutmzqiCM4U6c@cluster0.t30x6.mongodb.net/lowrateloan?retryWrites=true&w=majority&appName=Cluster0"
//     )
//     .then((res) => {
//       console.log("DB CONNECTED");
//     })
//     .catch((err) => {
//       console.log("DB NOT CONNECTED", err);
//     });
// };

// export default dbConnect;

// lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db();
  return { client, db };
}
