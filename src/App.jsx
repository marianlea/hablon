import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

//pages
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Vendor from "./pages/Vendor";
import Product from "./pages/Product";

// components
import SplashScreen from "./components/SplashScreen";
import Menu from "./components/Menu";

// icons
import { IoEllipsisVertical } from "react-icons/io5";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// data
import products from "./data/MockProducts";
import vendors from "./data/MockVendors";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const currentProduct = products[0];
  const currentVendor = vendors.find((v) => v.id === currentProduct.vendor_id);
  const vendorListings = currentVendor.product_listings
    .map((listing) => products.find((product) => listing === product.id))
    .filter(Boolean);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <BrowserRouter>
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
        <SearchBar
          handleSearchValueChange={handleSearchValueChange}
          searchValue={searchValue}
        />
      </header>
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              searchValue ? (
                <SearchResults
                  vendors={vendors}
                  filteredProducts={filteredProducts}
                />
              ) : (
                <Home products={products} vendors={vendors} />
              )
            }
          />
          <Route
            path="/product/:id"
            element={
              <Product
                products={products}
                vendors={vendors}
                vendorListings={vendorListings}
              />
            }
          />
          <Route
            path="/vendor/:id"
            element={<Vendor products={products} vendors={vendors} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
