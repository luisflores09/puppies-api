const mongoose = require("mongoose");
require("dotenv").config();

const mongooseConnection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
db.on("connected", () => console.log("MongoDB Connected"));
db.on("disconnected", () => console.log("MongoDB Disconnected"));

module.exports = mongooseConnection;
