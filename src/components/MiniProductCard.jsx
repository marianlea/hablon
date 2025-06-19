const MiniProductCard = ({ product }) => {
  return (
    <article className="mini-product-card-container">
      <figure className="image-holder">
        <img src={product.img}></img>{" "}
      </figure>
    </article>
  );
};

export default MiniProductCard;
