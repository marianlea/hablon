import { useNavigate, useLocation } from "react-router";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  ComboboxProvider,
} from "@ariakit/react";

const SearchBar = ({ searchValue, handleSearchValueChange }) => {
  return (
    <section className="search-box-container">
      <ComboboxProvider className="search-box">
        <Combobox
          className="search"
          value={searchValue}
          onChange={handleSearchValueChange}
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
  );
};

export default SearchBar;
