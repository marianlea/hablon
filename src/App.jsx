import "./App.css";

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
  return (
    <main className="main-container">
      <header className="home-header">
        <IoEllipsisVertical
          className="ellipsis-menu"
          size={50}
          color="#e1873d"
        />
        <img className="header-logo" src={hablonLogo}></img>
      </header>
      <Home products={products} vendors={vendors} />
    </main>
  );
}

export default App;
