const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js")

router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings})
})

router.get("/new", (req,res) => {
    res.render("listings/new.ejs")
})

router.post("/", async (req,res) => {
  const newListing = new Listing(req.body.listing);
    await newListing.save()
  res.redirect("/listings")
})

router.get("/:id", async (req,res) => {
    const {id} = req.params
  const listing = await Listing.findById(id);
  if(!listing){
    return res.status(404).send("listing not found")
  }
  res.render("listings/show.ejs", { listing });
})

router.get("/:id/edit", async (req,res) => {
  const {id} = req.params
    const listing = await Listing.findById(id)
  res.render("listings/edit.ejs", {listing})
})

router.put("/:id", async (req,res) => {
    const {id} = req.params
  await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect("/listings/" + id)
})

router.delete("/:id", async (req,res) => {
  const {id} = req.params
    await Listing.findByIdAndDelete(id)
  res.redirect("/listings")
})

module.exports = router
