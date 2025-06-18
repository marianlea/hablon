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
        const filterdProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section key={idx}>
            {filterdProducts.length > 0 ? (
              <p className="category"> {category}</p>
            ) : (
              ""
            )}
            <CarouselComp
              filteredProducts={filterdProducts}
              vendors={vendors}
            />
          </section>
        );
      })}
    </main>
  );
};

export default Home;
