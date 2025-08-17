import { Link } from "react-router";

// contexts
import { useCurrentUser } from "../context/CurrentUserContext";
import { useMenu } from "../context/MenuVisibilityContext";

// icons
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

// images
import hablonLogo from "../assets/images/hablon_shadow.png";
import LogoutButton from "./Logout";

const mainLinks = ["home", "about", "contact"];

const Menu = () => {
  const { currentUser } = useCurrentUser();
  const { setIsMenuVisible } = useMenu();

  return (
    <section className="menu-container">
      <header>
        <button
          className="close-menu-button"
          onClick={() => setIsMenuVisible((prev) => !prev)}
        >
          <IoCloseOutline size={50} color="#e1873d" />
        </button>
        <figure>
          <img src={hablonLogo} className="hablon-logo"></img>
        </figure>
      </header>
      <section className="links-container">
        <ul className="main-links-container">
          {mainLinks.map((link, idx) => (
            <li key={idx} onClick={() => setIsMenuVisible((prev) => !prev)}>
              <Link to="/" className="menu-links">
                {link.toUpperCase()}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="vendor-links-container">
          <h6>For Vendors</h6>
          <Link
            to="/vendors/signup"
            onClick={() => setIsMenuVisible((prev) => !prev)}
          >
            <li>Vendor Sign Up</li>
          </Link>
          <Link to="/login" onClick={() => setIsMenuVisible((prev) => !prev)}>
            <li>Vendor Log In</li>
          </Link>
          {currentUser && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </section>
      <footer className="hablon-socials">
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <LuInstagram />
        </span>
      </footer>
    </section>
  );
};

export default Menu;
