import { FaLocationDot } from "react-icons/fa6";
import onion from "../assets/images/onion.png";

const ProductCard = () => {
  return (
    <article className="product-card">
      <header className="image-container">
        <img src={onion} className="product-image"></img>
        <div className="vendor-round-container"></div>
      </header>
      <section className="product-details-container">
        <p className="product-title">Red onions</p>
        <p className="product-price">Php39/kg</p>
      </section>
      <footer className="product-location-footer">
        <FaLocationDot className="location-dot" color="#a67747" size={30} />
        <p className="product-address">Ilocos Region</p>
      </footer>
    </article>
  );
};

export default ProductCard;
