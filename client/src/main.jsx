import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./context/SearchContext.jsx";
// helpers
import ScrollToTop from "../src/helpers/ScrollToTop.jsx";
import { CurrentUserProvider } from "./context/CurrentUserContext.jsx";
import { MenuProvider } from "./context/MenuVisibilityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider>
        <CurrentUserProvider>
          <MenuProvider>
            <Toaster />
            <App />
          </MenuProvider>
        </CurrentUserProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
