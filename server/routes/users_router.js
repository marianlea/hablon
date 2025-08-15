import express from "express";
import User from "../models/user.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
      .populate("favorite_products")
      .populate("favorite_vendors");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("favorite_products")
      .populate("favorite_vendors");
    if (!user) return res.status(404).json({ message: " User not found " });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
