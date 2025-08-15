import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";

//pages
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Vendor from "./pages/Vendor";
import Product from "./pages/Product";

// components
import SplashScreen from "./components/SplashScreen";
import Menu from "./components/Menu";

// contexts
import { SearchProvider, useSearch } from "./context/SearchContext";

// data
import products from "./data/MockProducts";
import vendors from "./data/MockVendors";
import SearchBar from "./components/SearchBar";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// icons
import { IoEllipsisVertical } from "react-icons/io5";
function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const searchValue = useSearch();
  const handleMenuClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  // const handleSearchValueChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

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
        {/* <Routes>
          <Route
            path="/"
            element={
              searchValue ? (
                <SearchResults vendors={vendors} products={products} />
              ) : (
                <Home products={products} vendors={vendors} />
              )
            }
          />
          
          <Route
            path="/product/:id"
            element={<Product products={products} vendors={vendors} />}
          />
          <Route
            path="/vendor/:vendorId"
            element={<Vendor products={products} vendors={vendors} />}
          />
        </Routes>
         */}

        <Routes>
          <Route
            path="/"
            element={
              searchValue ? (
                <SearchResults products={products} vendors={vendors} />
              ) : (
                <Home products={products} vendors={vendors} />
              )
            }
          />

          <Route
            path="/search"
            element={<SearchResults vendors={vendors} products={products} />}
          />
          <Route
            path="/product/:id"
            element={<Product products={products} vendors={vendors} />}
          />
          <Route
            path="/vendor/:vendorId"
            element={<Vendor products={products} vendors={vendors} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
