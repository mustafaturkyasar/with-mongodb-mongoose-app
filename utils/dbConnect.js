/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {}; /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/

  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(
    "mongodb+srv://mstf:admin@cluster0-sh0ep.mongodb.net/KemalBalta?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
