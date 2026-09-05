require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose")
const Listing = require("../models/listing.js");
const { data } = require("./data.js")

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/staybnb"

async function main(){
  await mongoose.connect(MONGO_URI);
  console.log("connected to db")

  await Listing.deleteMany({})
  await Listing.insertMany(data);
  console.log("seeded " + data.length + " listings")

  await mongoose.connection.close()
}

main().catch((err) => {
    console.log(err)
  process.exit(1)
})
