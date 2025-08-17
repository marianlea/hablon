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

    const validToken = isTokenValid(token);

    if (!validToken) {
      console.log("Invalid or expired token");
      setCurrentUser(null);
      localStorage.removeItem("token");
    } else {
      setCurrentUser({ _id: validToken.decoded.id });
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
