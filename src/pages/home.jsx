import ProductCard from "../components/ProductCard";

const listings = [1, 2, 3, 4, 5, 6];

const Home = () => {
  return (
    <main className="home">
      {listings.map((listings, idx) => (
        <ProductCard key={idx} />
      ))}
    </main>
  );
};

export default Home;
