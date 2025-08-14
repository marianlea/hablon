import { Link } from "react-router";

import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const MiniProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <article className="mini-product-card-container">
        <figure className="image-holder">
          <img src={product.img}></img>
        </figure>
        <footer>
          <p>{product.name}</p>
          <p className="product-price">{`Php${product.price}/kg`}</p>
        </footer>
      </article>
    </Link>
  );
};

export default MiniProductCard;
