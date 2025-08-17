import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    // Lock body scroll when menu is open
    document.body.style.overflow = isMenuVisible ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuVisible]);

  return (
    <MenuContext value={{ isMenuVisible, setIsMenuVisible }}>
      {children}
    </MenuContext>
  );
};

export const useMenu = () => useContext(MenuContext);
