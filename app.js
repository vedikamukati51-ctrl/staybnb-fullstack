require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express")
const path = require("path");
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const listingsRouter = require("./routes/listings.js")

const app = express();
const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/staybnb";

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "public")))

async function connectDB(){
  await mongoose.connect(MONGO_URI)
    console.log("connected to mongodb")
}
connectDB().catch(err => console.log(err))

app.get("/", (req,res) => {
  res.redirect("/listings")
})

app.use("/listings", listingsRouter)

app.use((req,res) => {
    res.status(404).send("page not found")
})

app.listen(PORT, () => {
  console.log("server running on port " + PORT)
})
