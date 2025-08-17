import { Link } from "react-router";

// icons
import { FaLocationDot } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

// context
import { useSearch } from "../context/SearchContext";

const ProductCard = ({ product }) => {
  const { setSearchValue } = useSearch();

  return (
    <Link
      to={`/products/${product._id}/page`}
      onClick={() => setSearchValue("")}
      className="product-card-link"
    >
      <article className="product-card">
        <header className="image-container">
          <img className="product-image" src={product.img[0]}></img>
          {/* <MdFavoriteBorder
            size={40}
            className="fave-button"
            color="#ggg"
            style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" }}
          /> */}
          <div
            className="vendor-round-container"
            style={{
              backgroundImage: `url(${product.vendor_id.img})`,
            }}
          ></div>
        </header>
        <section className="product-details-container">
          <p className="product-title">{product.name}</p>
          <p className="product-price">{`Php${product.price}/${product.unit}`}</p>
        </section>
        <footer className="product-location-footer">
          <FaLocationDot className="location-dot" color="#a67747" size={15} />
          <p className="product-address">{product.vendor_id.address}</p>
        </footer>
      </article>
    </Link>
  );
};

export default ProductCard;
