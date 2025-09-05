import express from "express";
import Vendor from "../models/vendor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.JWT_SECRET;
const router = express.Router();

// POST login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await Vendor.findOne({ username: username });

    if (!existingUser) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const match = await bcrypt.compare(password, existingUser.password_digest);

    if (!match) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      SECRET,
      { expiresIn: "48h" }
    );

    res.status(200).json({
      message: "Login successful!",
      token: token,
      currentUser: {
        currentUser: existingUser,
      },
    });

    console.log(existingUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
