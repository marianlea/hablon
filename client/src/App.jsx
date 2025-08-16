import "./App.css";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

//pages
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Vendor from "./pages/Vendor";
import Product from "./pages/Product";

// components
import SplashScreen from "./components/SplashScreen";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";

// api
import {
  fetchAllVendors,
  fetchAllProducts,
  fetchAllUsers,
} from "./utils/hablon_api";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// icons
import { IoEllipsisVertical } from "react-icons/io5";

const fetchVendors = async (setVendors) => {
  try {
    const data = await fetchAllVendors();
    setVendors(data);
  } catch (err) {
    console.error(err);
  }
};

const fetchProducts = async (setProducts) => {
  try {
    const data = await fetchAllProducts();
    setProducts(data);
  } catch (err) {
    console.error(err);
  }
};

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchVendors(setVendors);
  }, []);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const handleMenuClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <section className="logo-container">
          <button className="ellipsis-container" onClick={handleMenuClick}>
            <IoEllipsisVertical
              className="ellipsis-menu"
              size={50}
              color="#e1873d"
            />
          </button>
          <img className="header-logo" src={hablonLogo}></img>
        </section>
        {isMenuVisible ? (
          <Menu
            isMenuVisible={isMenuVisible}
            handleMenuClick={handleMenuClick}
          />
        ) : null}
        <SearchBar />
      </header>
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} vendors={vendors} />}
          />

          <Route
            path="/search"
            element={<SearchResults vendors={vendors} products={products} />}
          />
          <Route
            path="/products/:id/page"
            element={<Product products={products} vendors={vendors} />}
          />
          <Route
            path="/vendors/:id/products"
            element={<Vendor products={products} vendors={vendors} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
