import { FaLocationDot } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCard = ({ product, vendors }) => {
  const vendor = vendors.find((v) => v.id === product.vendor_id);

  return (
    <article className="product-card">
      <header className="image-container">
        <img className="product-image" src={product.img}></img>
        <div
          className="vendor-round-container"
          style={{
            backgroundImage: `url(${vendor.img})`,
          }}
        ></div>
      </header>
      <section className="product-details-container">
        <p className="product-title">{product.name}</p>
        <p className="product-price">{`Php${product.price}/${product.unit}`}</p>
      </section>
      <footer className="product-location-footer">
        <FaLocationDot className="location-dot" color="#a67747" size={15} />
        <p className="product-address">Ilocos Region</p>
      </footer>
    </article>
  );
};

export default ProductCard;
