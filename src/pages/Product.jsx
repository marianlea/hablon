import { useParams, Link } from "react-router";

// icons
import {
  FaPhoneVolume,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

// components
import MiniProductCard from "../components/MiniProductCard";
import CarouselComp from "../components/CarouselComp";

const Product = ({ products, vendors }) => {
  const { id } = useParams();

  const product = products?.find((product) => product.id === Number(id));
  if (!product) return <p>Product not found</p>;

  const vendor = vendors?.find((vendor) => vendor.id === product.vendor_id);
  if (!vendor) return <p>Vendor not found</p>;

  const vendorListings = vendor.product_listings
    .map((listing) => products.find((product) => listing === product.id))
    .filter(Boolean);

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
            <h4 className="product-name">{`${product.name} from ${vendor.nickname}'s Farm`}</h4>
            <div className="other-details-container">
              <h5>{vendor.address}</h5>
              <h5>{`Php${product.price}/${product.unit}`}</h5>
            </div>
          </div>
        </header>
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
            <Link to={`/vendor/${vendor.id}`}>
              <button className="profile-button">{`View ${vendor.name}'s Profile`}</button>
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
                return <MiniProductCard key={product.id} product={product} />;
              })}
            </section>
          </footer>
        )}
      </article>
    </section>
  );
};

export default Product;
