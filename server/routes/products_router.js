import express from "express";
import Product from "../models/product.js";
import Vendor from "../models/vendor.js";
import mongoose from "mongoose";

// middleware
import ensureLoggedIn from "../middlewares/ensure_logged_in.js";

const router = express.Router();

// POST new product
router.post("/new", ensureLoggedIn, async (req, res) => {
  try {
    const { name, price, unit, img, category, description, availability } =
      req.body;
    const vendorId = req.userData.userId;

    const newProduct = new Product({
      name,
      price,
      unit,
      img,
      category,
      description,
      availability,
      vendor_id: vendorId,
    });

    // Save the product first
    const savedNewProduct = await newProduct.save();

    // Then update the vendor's product listings
    await Vendor.findByIdAndUpdate(vendorId, {
      $push: { product_listings: savedNewProduct._id },
    });

    return res.status(201).json(savedNewProduct);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err.message || "Error creating product",
    });
  }
});

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

// GET product by ID with vendor and other product listings product._id, name, images, price, unit
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

// PUT updated a product
router.put("/:id", ensureLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const vendorId = req.userData.userId;
    const updateData = req.body;

    const allowedFields = [
      "name",
      "price",
      "unit",
      "img",
      "category",
      "description",
      "availability",
    ];

    const filteredUpdateData = {};
    Object.keys(updateData).forEach((key) => {
      if (allowedFields.includes(key))
        if (key === "price") {
          filteredUpdateData[key] = Number(updateData[key]);
        } else if (key === "img" && !Array.isArray(updateData[key])) {
          filteredUpdateData[key] = [updateData[key]];
        } else {
          filteredUpdateData[key] = updateData[key];
        }
    });

    if (Object.keys(filteredUpdateData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update." });
    }

    // Use findOneAndUpdate to combine the two queries
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id, vendor_id: vendorId }, // Ensure vendor owns the product
      { $set: filteredUpdateData },
      {
        new: true,
        runValidators: true,
        context: "query",
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    return res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "Error updating product" });
  }
});

export default router;
