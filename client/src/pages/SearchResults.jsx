import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";

const SearchResults = ({ products, vendors }) => {
  const { searchValue } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="search-result-container">
      {filteredProducts.map((product) => {
        return (
          <div
            className="search-result-product-card-container"
            key={product._id}
          >
            <ProductCard product={product} vendors={vendors} />
          </div>
        );
      })}
    </section>
  );
};

export default SearchResults;
