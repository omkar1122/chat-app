const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    url =  "mongodb+srv://omkarjadiya:9yIHgkoK7HNF7zPa@cluster0.zng9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

