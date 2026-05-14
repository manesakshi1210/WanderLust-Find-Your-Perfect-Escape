const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// Listings Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
});

//new  listing route
app.get("/listings/new",(req,res)=>{
   res.render("listings/new.ejs");
})

//new listing create
app.post("/listings",async(req,res)=>
{
  //  let{title,description,image,prize,country,location}=req.body;
  // let Listing=req.body.listing;
  const newListing =new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");

})

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});




// Server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});