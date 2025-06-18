import "./App.css";
import { useState } from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  ComboboxProvider,
} from "@ariakit/react";

//pages
import Home from "./pages/home";
import SplashScreen from "./pages/splash_screen";

// icons
import { IoEllipsisVertical } from "react-icons/io5";

// assets
import hablonLogo from "./assets/images/hablon_shadow.png";

// data
import products from "./data/mock_products";
import vendors from "./data/mock_vendors";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <header className="header">
        <section className="logo-container">
          <IoEllipsisVertical
            className="ellipsis-menu"
            size={50}
            color="#e1873d"
          />
          <img className="header-logo" src={hablonLogo}></img>
        </section>
        <section className="search-box-container">
          <ComboboxProvider className="search-box">
            <Combobox
              className="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search products"
            />
            {searchValue && (
              <ComboboxPopover className="search-popover">
                {filteredProducts.map((product) => (
                  <ComboboxItem key={product.id} value={product.name} />
                ))}
              </ComboboxPopover>
            )}
          </ComboboxProvider>
        </section>
      </header>
      <main className="main-container">
        <Home products={products} vendors={vendors} />
      </main>
    </>
  );
}

export default App;
