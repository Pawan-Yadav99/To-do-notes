const { mongoose } = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    mongoose.connection.on("connected", () => {
      console.log("Connected to DB");
    });

    // If the connection throws an error
    mongoose.connection.on("error", (error) => {
      console.log("DB connection error: " + error);
    });

    // When the connection is disconnected
    mongoose.connection.on("disconnected", () => {
      console.log("DB connection disconnected.");
    });

    //enable mongoose debug
    mongoose.set("debug", true);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connectDatabase,
};
