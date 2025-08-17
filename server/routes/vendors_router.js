import express from "express";
import Vendor from "../models/vendor.js";
import bcrypt from "bcrypt";

const router = express.Router();

// POST new vendor
router.post("/signup", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nickname,
      username,
      email,
      password,
      confirmPassword,
      address,
      type,
      img,
      description,
      phoneNumber,
      messenger,
      facebook,
      instagram,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await Vendor.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email or username already taken" });
    }

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newVendor = new Vendor({
      firstName,
      lastName,
      nickname,
      username,
      email,
      password_digest: hashedPassword,
      address,
      type,
      img,
      description,
      contactDetails: {
        phone_number: phoneNumber,
        messenger,
        facebook,
        instagram,
      },
      product_listings: [],
      favorite_products: [],
      favorite_vendors: [],
    });

    const savedNewVendor = await newVendor.save();

    return res.status(201).json(savedNewVendor);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

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
