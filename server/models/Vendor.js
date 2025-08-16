import { mongoose } from "mongoose";

const { Schema } = mongoose;

const contactDetailsSchema = new Schema({
  phone_number: {
    type: String,
    required: true,
    match: [/^\d{11}$/, "Phone number must be exactly 11 digits"],
  },
  messenger: String,
  facebook: String,
  instagram: String,
});

const vendorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    nickname: { type: String },
    username: { type: String, required: true, unique: true, minlength: 8 },
    email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
    password_digest: {
      type: String,
      required: true,
      match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    },
    address: { type: String, required: true },
    type: {
      type: String,
      enum: ["Farmer", "Weaver", "Artisan", "Artist", "Food artisan"],
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
