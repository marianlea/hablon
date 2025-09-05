import { createContext, useContext, useEffect, useState } from "react";
import isTokenValid from "../helpers/isTokenValid.jsx";
import { fetchVendorWithProducts } from "../utils/hablon_api.js";
import { useNavigate } from "react-router";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("You are not logged in.");
        setCurrentUser(null);
        return;
      }

      const { valid, decoded, error } = isTokenValid(token);
      if (!valid) {
        console.log("Invalid or expired token", error);
        setCurrentUser(null);
        localStorage.removeItem("token");
      }

      try {
        const currentUserData = await fetchVendorWithProducts(decoded.id);
        setCurrentUser(currentUserData);
      } catch (err) {
        console.error(err);
        // setCurrentUser({ _id: decoded.id });
      }
    };

    initUser();
  }, []);

  return (
    <CurrentUserContext value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext>
  );
};

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
