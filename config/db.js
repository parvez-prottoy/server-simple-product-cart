const mongoose = require("mongoose");
const url = require("./config").db.url;
const chalk = require("chalk");

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(chalk.black.bgGreenBright("MongoDB is connected."));
  } catch (error) {
    console.log(
      chalk.black.bgRedBright("MongoDB is not connected.", +" " + error)
    );
    process.exit(1);
  }
};
module.exports = connectDB;
