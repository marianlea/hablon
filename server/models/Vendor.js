import { mongoose } from "mongoose";

const { Schema } = mongoose;

const contactDetailsSchema = new Schema({
  phone_number: {
    type: String,
    required: true,
  },
  messenger: String,
  facebook: String,
});

const vendorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    nickname: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_digest: { type: String, required: true, minlength: 8 },
    address: String,
    type: {
      type: String,
      enum: ["farmer", "weaver", "artisan", "artist", "food artisan"],
      required: true,
    },
    img: String,
    description: String,
    contact_details: contactDetailsSchema,
    product_listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    favorite_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    favorite_vendors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
      },
    ],
  },
  { timestamps: true }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
