import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { useCurrentUser } from "../context/CurrentUserContext";
import isTokenValid from "../helpers/isTokenValid";

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
import { fetchProductWithVendorAndListings } from "../utils/hablon_api";

// data
const fetchProductPageData = async (setProduct, id) => {
  try {
    const data = await fetchProductWithVendorAndListings(id);
    setProduct(data);
  } catch (err) {
    console.error(err);
  }
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    fetchProductPageData(setProduct, id);
  }, [id]);

  const canEditProduct = () => {
    const token = localStorage.getItem("token");
    if (!token || !currentUser) return false;

    // Check if token is valid
    const validToken = isTokenValid(token);
    if (!validToken) return false;

    // Check if current user is the vendor of this product
    return product?.vendor_id?._id === currentUser._id;
  };

  if (!product) return <p>Product not found</p>;
  const vendor = product.vendor_id;
  const vendorListings = vendor.product_listings;

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
          <Link to={`/products/${product._id}/edit`}>
            <button>Edit Product</button>
          </Link>
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
        {vendor.product_listings.length > 1 && (
          <footer className="more-products-container">
            <h4>{`More Products from ${vendor.nickname}'s Farm`}</h4>
            <section className="mini-product-cards">
              {vendorListings.map((product) => {
                return <MiniProductCard key={product._id} product={product} />;
              })}
            </section>
          </footer>
        )}
      </article>
    </section>
  );
};

export default Product;
