import CarouselComp from "../components/CarouselComp";

const categories = [
  "Farmer's Produce",
  "Clothing",
  "Bags & Accessories",
  "Home & Living",
  "Gifts & Souvenirs",
  "Fabrics",
  "Specialty / Limited Edition",
];

const Home = ({ products, vendors }) => {
  return (
    <main className="home-container">
      {categories.map((category, idx) => {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section key={idx}>
            {filteredProducts.length > 0 ? (
              <p className="category"> {category}</p>
            ) : (
              ""
            )}
            <CarouselComp
              filteredProducts={filteredProducts}
              vendors={vendors}
              card="productCard"
            />
          </section>
        );
      })}
    </main>
  );
};

export default Home;
