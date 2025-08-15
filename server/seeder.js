import mongoose from "mongoose";
import dotenv from "dotenv";

import Vendor from "./models/vendor.js";
import Product from "./models/product.js";
import User from "./models/user.js";

import vendorsData from "./data/vendors.js";
import productsData from "./data/products.js";

dotenv.config();

console.log("Mongo URI:", process.env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    // Clear existing data
    await Vendor.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // 1️⃣ Insert vendors
    const vendorDocs = await Vendor.insertMany(
      vendorsData.map((v) => ({
        firstName: v.firstName,
        lastName: v.lastName,
        nickname: v.nickname,
        username: v.username,
        email: v.email || `${v.username}@test.com`,
        password_digest: "password123", // for MVP
        address: v.address,
        type: v.type,
        img: v.img,
        description: v.description,
        contact_details: v.contact_details,
        product_listings: [], // will populate later
        favorite_products: [],
        favorite_vendors: [],
      }))
    );

    // Mapping numeric ID → MongoDB _id
    const vendorIdMap = {};
    vendorsData.forEach((v, i) => {
      vendorIdMap[v.id] = vendorDocs[i]._id;
    });

    // 2️⃣ Insert products
    const productDocs = await Product.insertMany(
      productsData.map((p) => ({
        name: p.name,
        price: p.price,
        unit: p.unit === "pc" ? "piece" : p.unit,
        img: p.img,
        category: p.category,
        description: p.description,
        availability: p.availability,
        vendor_id: vendorIdMap[p.vendor_id], // ✅ use ObjectId
      }))
    );

    // Mapping numeric product ID → MongoDB _id
    const productIdMap = {};
    productsData.forEach((p, i) => {
      productIdMap[p.id] = productDocs[i]._id;
    });

    // 3️⃣ Update vendors with product listings
    for (let i = 0; i < vendorsData.length; i++) {
      const vendor = vendorDocs[i];
      const listings = vendorsData[i].product_listings.map(
        (pid) => productIdMap[pid]
      );
      vendor.product_listings = listings;
      await vendor.save();
    }

    // 4️⃣ Insert test users
    await User.insertMany([
      {
        firstName: "Lea",
        lastName: "Test",
        username: "lea_test",
        email: "lea@test.com",
        password_digest: "password123",
        favorite_products: [productIdMap[1], productIdMap[5]],
        favorite_vendors: [vendorIdMap[2], vendorIdMap[4]],
      },
      {
        firstName: "User",
        lastName: "Test",
        username: "user_test",
        email: "user@test.com",
        password_digest: "password123",
        favorite_products: [productIdMap[3], productIdMap[8]],
        favorite_vendors: [vendorIdMap[1], vendorIdMap[5]],
      },
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB().then(seedDB);
