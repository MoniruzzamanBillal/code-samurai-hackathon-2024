const mongoose = require("mongoose");

const url = `mongodb://localhost:27017/mydatabase`;

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to database successfully ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
