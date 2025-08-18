import { createContext, useContext, useEffect, useState } from "react";
import isTokenValid from "../helpers/isTokenValid.jsx";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
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
    } else {
      setCurrentUser({ _id: decoded.id });
    }
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
