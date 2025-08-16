import { useParams } from "react-router";

// icons
import {
  FaPhoneVolume,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

// components
import MiniProductCard from "../components/MiniProductCard";

// api
import { fetchVendorWithProducts } from "../utils/hablon_api";
import { useEffect, useState } from "react";

// data
const fetchVendorData = async (setVendor, id) => {
  try {
    const data = await fetchVendorWithProducts(id);
    setVendor(data);
  } catch (err) {
    console.error(err);
  }
};

const Vendor = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    fetchVendorData(setVendor, id);
  }, [id]);
  if (!vendor) return <p>Vendor not found</p>;

  const vendorListings = vendor.product_listings;

  return (
    <article className="vendor-page-container">
      <figure className="vendor-img-container">
        <img className="vendor-img" src={vendor.img}></img>
      </figure>
      <div className="vendor-details-container">
        <section className="vendor-details">
          <h4>{`About the ${vendor.type}`}</h4>
          <p>{vendor.description}</p>
        </section>
        <section className="vendor-contact-details">
          <div>
            <h4>{`Contact ${vendor.nickname}`}</h4>
            <div className="contact-details-container">
              <button className="phone-icon">
                <FaPhoneVolume size={25} color="#2b462e" />
              </button>
              <button className="messenger-icon">
                <FaFacebookMessenger size={25} color="#2b462e" />
              </button>
              <button className="fb-icon">
                <FaFacebook size={25} color="#2b462e" />
              </button>
              <button className="instagram-icon">
                <RiInstagramFill size={25} color="#2b462e" />
              </button>
            </div>
          </div>
          <div className="location-container">
            <h4>Location</h4>
            <button>
              <span>
                <FaLocationDot size={18} color="#a67747" />
              </span>
              Ilocos Region
            </button>
          </div>
        </section>
        <footer className="more-products-container">
          <h4>Our Products</h4>
          <div className="mini-product-cards">
            {vendorListings.map((product) => {
              return <MiniProductCard key={product.id} product={product} />;
            })}
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Vendor;
