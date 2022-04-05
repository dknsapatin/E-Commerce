const express = require("express");
const { clearScreenDown } = require("readline");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dkns:dkns@cluster0.cvjkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend server is running!");
});
