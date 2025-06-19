import {
  FaPhoneVolume,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa6";
import MiniProductCard from "../components/MiniProductCard";

const Product = ({ product, vendor, vendorListings }) => {
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
            <h4 className="product-name">{`${product.name} from ${vendor.preferred_name}'s Farm`}</h4>
            <div className="other-details-container">
              <h5>{vendor.address}</h5>
              <h5>{`Php${product.price}/${product.unit}`}</h5>
            </div>
          </div>
        </header>
        <section className="vendor-details-container">
          <div
            className="vendor-image-container"
            alt={`${vendor.preferred_name}'s image`}
            style={{ backgroundImage: `url(${vendor.img})` }}
          ></div>
          <div className="vendor-description-contact-details-container">
            <h4 className="vendor-title">{`About ${vendor.preferred_name}`}</h4>
            <p className="vendor-description">{vendor.description}</p>
            <div className="vendor-contact-details-container">
              <h4 className=" vendor-title">Contact the grower</h4>
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
              </div>
            </div>
          </div>
        </section>
        {vendor.product_listings.length > 1 && (
          <footer className="more-products-container">
            <h4>{`More Products from ${vendor.preferred_name}'s Farm`}</h4>
            {vendorListings.map((product) => {
              return (
                <div className="mini-product-card-container" key={product.id}>
                  <MiniProductCard product={product} />
                </div>
              );
            })}
          </footer>
        )}
      </article>
    </section>
  );
};

export default Product;
