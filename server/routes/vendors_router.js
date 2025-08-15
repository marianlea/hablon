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
    const vendor = await Vendor.findById(req.params.id).populate(
      "product_listings"
    );
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
