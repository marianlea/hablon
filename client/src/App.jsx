import "./App.css";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

//pages
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Vendor from "./pages/Vendor";
import Product from "./pages/Product";
import VendorSignUp from "./pages/VendorSignUp";
import Login from "./pages/Login";
import ProductForm from "./pages/ProductForm";

// components
import SplashScreen from "./components/SplashScreen";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductFormWrapper from "./components/ProductFormWrapper";

// api
import { fetchAllVendors, fetchAllProducts } from "./utils/hablon_api";

// contexts
import { useMenu } from "./context/MenuVisibilityContext";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// icons
import { IoEllipsisVertical } from "react-icons/io5";

// data
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

export const App = () => {
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const { isMenuVisible, setIsMenuVisible } = useMenu();

  useEffect(() => {
    fetchVendors(setVendors);
  }, []);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <>
      <header className="header">
        <section className="logo-container">
          <button
            className="ellipsis-container"
            onClick={() => setIsMenuVisible((prev) => !prev)}
          >
            <IoEllipsisVertical
              className="ellipsis-menu"
              size={50}
              color="#e1873d"
            />
          </button>
          <img className="header-logo" src={hablonLogo}></img>
        </section>
        {isMenuVisible ? <Menu /> : null}
        <SearchBar />
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/vendors/signup" element={<VendorSignUp />} />
          <Route path="/login" element={<Login />} />
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
          <Route element={<ProtectedRoute />}>
            <Route
              path="/products/new"
              element={<ProductForm mode="create" />}
            />
            <Route path="/products/:id/edit" element={<ProductFormWrapper />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
