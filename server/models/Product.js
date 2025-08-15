import { mongoose } from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      required: true,
      enum: [
        "kg",
        "piece",
        "bundle",
        "box",
        "g",
        "pc",
        "bunch",
        "bottle",
        "tray",
      ],
    },
    img: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Farmer's Produce",
        "Clothing",
        "Bags & Accessories",
        "Home & Living",
        "Gifts & Souvenirs",
        "Fabrics",
        "Specialty / Limited Edition",
      ],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      enum: ["available", "out of stock", "seasonal"],
      default: "available",
    },
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
