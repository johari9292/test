const mongoose = require("mongoose");

// const connectionstr =  "mongodb://localhost:27017/local";
const MONGO_URL= "mongodb+srv://joharibalti1996:is119821885@cluster0-jjj5l.mongodb.net/test?retryWrites=true&w=majority";



mongoose.connect(MONGO_URL,{useCreateIndex: true, useNewUrlParser: true }).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);