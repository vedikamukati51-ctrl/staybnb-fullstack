const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
    type: String,
    required: true
  },
  headline: String,
  description: String,
  image: {
      type: String,
      default: "/images/image-s5.png"
  },
  price: {
    type: Number,
    required: true
  },
  location: {
      type: String,
    required: true
  },
  country: String,
  guests: {
    type: Number,
    default: 2
  },
  bedrooms: {type: Number, default: 1},
  bathrooms: {type: Number, default: 1},
  amenities: {
    type: String,
    default: "WiFi / Kitchen"
  }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
