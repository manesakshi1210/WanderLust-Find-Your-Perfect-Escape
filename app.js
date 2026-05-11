const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

app.get("/",(req ,res) => {
  res.send("Hi, i am root");
})

app.listen(8080,()=>
{
    console.log("Server is listening to port 8080");
}
);