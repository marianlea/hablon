import ProductCard from "../components/ProductCard";

const SearchResult = ({ filteredProducts, vendors }) => {
  return (
    <section className="search-result-container">
      {filteredProducts.map((product) => {
        return (
          <div
            className="search-result-product-card-container"
            key={product.id}
          >
            <ProductCard product={product} vendors={vendors} />
          </div>
        );
      })}
    </section>
  );
};

export default SearchResult;
