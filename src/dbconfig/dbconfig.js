import mongoose from "mongoose";

export async function Connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://info:FsEUxRCoqD4LNlct@cluster0.zrx72qz.mongodb.net/lowRateHomeLoan",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      }
    );

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb Connected");
    });

    connection.on("error", (err) => {
      console.error("MongoDb Connection Error:", err);
    });
  } catch (error) {
    console.error("Something went wrong with the DB connection:", error);
  }
}
