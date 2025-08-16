import express from "express";
import Vendor from "../models/vendor.js";

const router = express.Router();

// GET all vendors
router.get("/", async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("product_listings");
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET vendor by ID
router.get("/:id", async (req, res) => {
  try {
    let vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET vendor by ID only with populated product_listings
router.get("/:id/products", async (req, res) => {
  try {
    const vendorWithProducts = await Vendor.findById(req.params.id).populate(
      "product_listings",
      "name price unit img"
    );

    if (!vendorWithProducts)
      return res.status(404).json({ message: "Vendor not found" });
    res.json(vendorWithProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
