import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useCurrentUser } from "../context/CurrentUserContext";
import { useNavigate } from "react-router";

const FaveButton = ({ productId = null, vendorId = null }) => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  return (
    <button className="heart-wrapper">
      {currentUser?.favorite_products?.includes(productId) ||
      currentUser?.favorite_vendors?.includes(vendorId) ? (
        <MdOutlineFavorite size={40} className="fave-button" />
      ) : (
        <MdFavoriteBorder size={40} className="fave-button" />
      )}
    </button>
  );
};

export default FaveButton;
