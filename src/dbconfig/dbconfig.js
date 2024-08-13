import mongoose from "mongoose";

let isConnected; // Tracks the connection state

export async function Connect() {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONG_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      maxPoolSize: 10, // Set maximum pool size
    });

    isConnected = mongoose.connection.readyState; // Save the connection state

    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB Connection Error:", err);
    });
  } catch (error) {
    console.error("Something went wrong with the DB connection:", error);
  }
}
