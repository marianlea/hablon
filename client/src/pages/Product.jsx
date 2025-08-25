import { useParams, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCurrentUser } from "../context/CurrentUserContext";

// icons
import {
  FaPhoneVolume,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

// components
import MiniProductCard from "../components/MiniProductCard";

// api
import {
  fetchProductWithVendorAndListings,
  productDelete,
} from "../utils/hablon_api";
import DeleteDialog from "../components/DeleteDialog";

// data
const fetchProductPageData = async (setProduct, id, setIsLoading) => {
  try {
    setIsLoading(true);
    const data = await fetchProductWithVendorAndListings(id);
    setProduct(data);
  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

const Product = () => {
  // get product id from params
  const { id } = useParams();
  const navigate = useNavigate();
  // currentUser context
  const { currentUser } = useCurrentUser();
  // product state
  const [product, setProduct] = useState(null);
  // state for deleting dialog
  const [isDeleting, setIsDeleting] = useState(false);
  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductPageData(setProduct, id, setIsLoading);
  }, [id]);

  const canEditProduct = () => {
    if (!currentUser) return false;
    // Check if current user is the vendor of this product
    return product?.vendor_id?._id === currentUser._id;
  };

  // if product is loading
  if (isLoading) return <p>Loading product...</p>;
  // if no product,
  if (!product) return <p>Product not found</p>;

  // vendor data and listing
  const vendor = product.vendor_id;
  const vendorListings = vendor.product_listings;

  // deleting a product
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await productDelete(product._id);
      toast.success("Product deleted successfully");
      // Redirect to vendor's profile
      navigate(`/vendors/${vendor._id}/products`);
    } catch (err) {
      setIsDeleting(false);
      toast.error(err.error || "Failed to delete product");
    }
  };

  return (
    <section className="product-page-container">
      <article className="product-page-product-card">
        <header className="product-card-header">
          <figure className="product-img-holder">
            <img
              src={product.img}
              className="product-image"
              alt={product.name}
            ></img>
          </figure>
          <div className="product-details-container">
            <h4 className="product-name">{`${product.name} from ${vendor.nickname}'s shop`}</h4>
            <div className="other-details-container">
              <h5>{vendor.address}</h5>
              <h5>{`Php${product.price}/${product.unit}`}</h5>
            </div>
          </div>
        </header>

        <p>{product.availability}</p>
        <p className="product-description">{product.description}</p>
        {canEditProduct() && (
          <div>
            <Link to={`/products/${product._id}/edit`}>
              <button>Edit Product</button>
            </Link>
            <DeleteDialog
              handleDelete={handleDelete}
              productName={product.name}
              isDeleting={isDeleting}
            />
          </div>
        )}

        <section className="vendor-details-container">
          <header>
            <h4 className="vendor-title">{`About ${vendor.nickname}`}</h4>
            <div
              className="vendor-image-container"
              alt={`${vendor.nickname}'s image`}
              style={{ backgroundImage: `url(${vendor.img})` }}
            ></div>
          </header>
          <div className="vendor-description-contact-details-container">
            <p className="vendor-description">{vendor.description}</p>
            <Link to={`/vendors/${vendor._id}/products`}>
              <button className="profile-button">{`View ${vendor.nickname}'s Profile`}</button>
            </Link>
            <div className="vendor-contact-details-container">
              <h4 className=" vendor-title">{`Contact ${vendor.nickname}`}</h4>
              <div className="vendor-contact-details">
                <button className="phone-icon">
                  <FaPhoneVolume size={25} color="#2b462e" />
                </button>
                <button className="messenger-icon">
                  <FaFacebookMessenger size={25} color="#2b462e" />
                </button>
                <button className="fb-icon">
                  <FaFacebook size={25} color="#2b462e" />
                </button>
                <button className="instagram-icon">
                  <RiInstagramFill size={25} color="#2b462e" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {vendor.product_listings.length > 1 ? (
          <footer className="more-products-container">
            <h4>{`More Products from ${vendor.nickname}'s Farm`}</h4>
            <section className="mini-product-cards">
              {vendorListings.map((product) => {
                return <MiniProductCard key={product._id} product={product} />;
              })}
            </section>
          </footer>
        ) : (
          <footer className="more-products-container">
            <h4>No other product listed.</h4>
            <Link to="/products/new">
              <span>Add product</span>
            </Link>
          </footer>
        )}
      </article>
    </section>
  );
};

export default Product;
