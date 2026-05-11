const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListingSchema = new Schema({
    title : String,
    description : String,
    image: String,
    price: Number,
    location: String,
    country:String
})