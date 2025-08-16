import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// GET all products with vendors ID, image, address
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
      .populate("vendor_id")
      .populate("vendor_id", "nickname img address");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single product by ID with vendor
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("vendor_id");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single product by ID with vendor and other product listings product._id, name, images, price, unit
router.get("/:id/page", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate({
      path: "vendor_id",
      populate: { path: "product_listings", select: "name price unit img" },
    });

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
