import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
    if (value) {
      navigate("/search");
    }
  };
  return (
    <SearchContext value={{ searchValue, handleSearchValueChange }}>
      {children}
    </SearchContext>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
