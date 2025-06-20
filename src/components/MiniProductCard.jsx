const MiniProductCard = ({ product }) => {
  return (
    <article className="mini-product-card-container">
      <figure className="image-holder">
        <img src={product.img}></img>
      </figure>
      <footer>
        <p>{product.name}</p>
        <p className="product-price">{`Php${product.price}/kg`}</p>
      </footer>
    </article>
  );
};

export default MiniProductCard;
