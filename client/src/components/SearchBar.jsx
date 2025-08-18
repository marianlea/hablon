import { useNavigate } from "react-router";
import { useSearch } from "../context/SearchContext";

import { Combobox, ComboboxProvider } from "@ariakit/react";

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
      </ComboboxProvider>
    </section>
  );
};

export default SearchBar;
