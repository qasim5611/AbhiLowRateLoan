import mongoose from "mongoose";
// mongodb+srv://serverBoiler:BrxyutmzqiCM4U6c@cluster0.t30x6.mongodb.net/lowrateloan?retryWrites=true&w=majority&appName=Cluster0

export async function Connect() {
  try {
    mongoose.connect(
      "mongodb+srv://serverBoiler:BrxyutmzqiCM4U6c@cluster0.t30x6.mongodb.net/lowrateloan?retryWrites=true&w=majority&appName=Cluster0"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb Connected");
    });

    connection.on("error", (err) => {
      console.log("MongoDb Error!", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong On DB Connection", error);
  }
}
