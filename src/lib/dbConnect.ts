import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database already connected !");
  }

  try {
    const connectedInstance = await mongoose.connect(
      process.env.MONGODB_URI || ""
    );
    connection.isConnected = connectedInstance.connections[0].readyState;
    console.log(
      `db connected successfully ! db host at ${connectedInstance.connection.host}`
    );
  } catch (error) {
    console.log("db connection failed");
    process.exit(1);
  }
}


export default connectDB

