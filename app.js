const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect MongoDB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// Test Route
app.get("/testlisting", async (req, res) => {
  let sampleListing = new Listing({
    title: "My new villa",
    description: "by the beach",
    price: 1200,
    location: "Goa",
    country: "India",
  });

  await sampleListing.save();

  console.log("Sample was saved!");
  res.send("Successful Testing");
});

// Server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});