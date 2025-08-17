import { FormError } from "@ariakit/react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import {
  Form,
  FormField,
  FormInput,
  FormSelect,
  FormSubmit,
} from "../components/Form";

import { useFormStore } from "../components/Form";
import { SelectItem } from "../components/Select";
import { productCreate, productUpdate } from "../utils/hablon_api";

export const ProductForm = ({ mode = "create", initialData = null }) => {
  const navigate = useNavigate();
  const form = useFormStore({
    defaultValues: initialData || {
      name: "",
      price: "",
      unit: "",
      img: "",
      category: "",
      description: "",
      availability: "",
    },
  });

  const $ = form.names;

  form.useSubmit(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("You should be logged in to create/edit a product.");
      return false;
    }

    try {
      const values = form.getState().values;
      const productData = {
        ...values,
        price: Number(values.price),
        img: Array.isArray(values.img) ? values.img : [values.img],
      };

      if (mode === "edit" && initialData?._id) {
        const updatedProduct = await productUpdate(
          initialData._id,
          productData
        );
        toast.success("Product updated successfully!");
        navigate(`/products/${updatedProduct._id}/page`);
      } else {
        const productCreated = await productCreate(productData);
        toast.success("Product created successfully!");
        navigate(`/products/${productCreated._id}/page`);
      }
      return true;
    } catch (err) {
      console.error("Operation failed:", err);
      toast.error(err?.error || err?.message || "Failed to save product");

      return false;
    }
  }, false);

  return (
    <Form store={form}>
      <FormField name={$.name} label="Product Name">
        <FormInput name={$.name} required placeholder="Bagoong Balayan" />
        <FormError name={$.name} />
      </FormField>
      <FormField name={$.price} label="Price">
        <FormInput
          name={$.price}
          required
          placeholder="160"
          pattern="^\d*\.?\d*$"
        />
        <FormError name={$.price} />
      </FormField>
      <FormField name={$.unit} label="Unit">
        <FormSelect name={$.unit} required>
          <SelectItem value="">Select an item</SelectItem>
          <SelectItem value="kg" />
          <SelectItem value="piece" />
          <SelectItem value="bundle" />
          <SelectItem value="box" />
          <SelectItem value="g" />
          <SelectItem value="pc" />
          <SelectItem value="bunch" />
          <SelectItem value="bottle" />
          <SelectItem value="tray" />
        </FormSelect>
        <FormError name={$.unit} />
      </FormField>
      <FormField name={$.img} label="Product Photo">
        <FormInput name={$.img} required />
        <FormError name={$.img} />
      </FormField>
      <FormField name={$.category} label="Category">
        <FormSelect name={$.category} required>
          <SelectItem value="">Select an item</SelectItem>
          <SelectItem value="Farmer's Produce" />
          <SelectItem value="Clothing" />
          <SelectItem value="Bags & Accessories" />
          <SelectItem value="Home & Living" />
          <SelectItem value="Gifts & Souvenirs" />
          <SelectItem value="Fabrics" />
          <SelectItem value="Specialty / Limited Edition" />
        </FormSelect>
        <FormError name={$.category} />
      </FormField>
      <FormField name={$.description} label="Description">
        <FormInput name={$.description} required />
        <FormError name={$.description} />
      </FormField>
      <FormField name={$.availability} label="Availability">
        <FormSelect name={$.availability} required>
          <SelectItem value="">Select an item</SelectItem>
          <SelectItem value="available" />
          <SelectItem value="out of stock" />
          <SelectItem value="seasonal" />
        </FormSelect>
        <FormError name={$.availability} />
      </FormField>

      <div className="buttons">
        <FormSubmit>
          {mode === "edit" ? "Update Product" : "Create Product"}
        </FormSubmit>
      </div>
    </Form>
  );
};

export default ProductForm;
