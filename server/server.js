import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import productRoutes from "./routes/products_router.js";
import vendorRoutes from "./routes/vendors_router.js";
import userRoutes from "./routes/users_router.js";
import sessionRoutes from "./routes/session_router.js";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 9900;
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", sessionRoutes);
app.use("/vendors", vendorRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Yo it's running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
