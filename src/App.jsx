import "./App.css";
import { useState } from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  ComboboxProvider,
} from "@ariakit/react";

//pages
import Home from "./pages/Home";

// components
import SplashScreen from "./components/SplashScreen";

// icons
import { IoEllipsisVertical } from "react-icons/io5";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// data
import products from "./data/MockProducts";
import vendors from "./data/MockVendors";
import SearchResult from "./pages/searchResult";
import Product from "./pages/Product";
import Vendor from "./pages/Vendor";
import Menu from "./components/Menu";

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

        <section className="search-box-container">
          <ComboboxProvider className="search-box">
            <Combobox
              className="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search products"
            />
            {/* {searchValue && (
              <ComboboxPopover className="search-popover">
                {filteredProducts.slice(0, 5).map((product) => (
                  <ComboboxItem key={product.id} value={product.name} />
                ))}
              </ComboboxPopover> */}
          </ComboboxProvider>
        </section>
      </header>
      <main className="main-container"></main>
    </>
  );
}

export default App;
