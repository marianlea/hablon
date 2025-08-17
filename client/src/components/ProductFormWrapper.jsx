import { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { fetchProductWithVendor } from "../utils/hablon_api";
import ProductForm from "../pages/ProductForm";

export const ProductFormWrapper = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductWithVendor(id);
        setProduct(data);
      } catch (err) {
        toast.error(err.error || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return <ProductForm mode="edit" initialData={product} />;
};

export default ProductFormWrapper;
