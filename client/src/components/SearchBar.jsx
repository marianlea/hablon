import { useNavigate } from "react-router";
import { useSearch } from "../context/SearchContext";

import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  ComboboxProvider,
} from "@ariakit/react";

const SearchBar = () => {
  const { searchValue, handleSearchValueChange } = useSearch();
  return (
    <section className="search-box-container">
      <ComboboxProvider className="search-box">
        <Combobox
          className="search"
          value={searchValue}
          onChange={(e) => handleSearchValueChange(e.target.value)}
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
