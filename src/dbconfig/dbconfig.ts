
import mongoose from "mongoose";

export async function Connect(): Promise<boolean> {
  try {
    await mongoose.connect(process.env.MONG_URL!, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb Connected");
    });

    connection.on("error", (err) => {
      console.error("MongoDb Connection Error:", err);
    });

    return true; // Indicate success
  } catch (error) {
    console.error("Something went wrong with the DB connection:", error);
    return false; // Indicate failure
  }
}
