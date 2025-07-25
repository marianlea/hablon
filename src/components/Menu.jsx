// icons
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

// images
import hablonLogo from "../assets/images/hablon_shadow.png";

const mainLinks = ["home", "about", "contact"];

const Menu = ({ handleMenuClick }) => {
  return (
    <section className="menu-container">
      <header>
        <button className="close-menu-button" onClick={handleMenuClick}>
          <IoCloseOutline size={50} color="#e1873d" />
        </button>
        <figure>
          <img src={hablonLogo} className="hablon-logo"></img>
        </figure>
      </header>
      <section className="links-container">
        <ul className="main-links-container">
          {mainLinks.map((link, idx) => (
            <li key={idx}>{link.toUpperCase()}</li>
          ))}
        </ul>
        <ul className="vendor-links-container">
          <h6>For Vendors</h6>
          <li>Vendor Sign Up</li>
          <li>Vendor Log In</li>
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
