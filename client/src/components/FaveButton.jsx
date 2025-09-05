import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useCurrentUser } from "../context/CurrentUserContext";
import { useNavigate } from "react-router";

const FaveButton = ({ productId = null, vendorId = null }) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  console.log(currentUser);

  const navigate = useNavigate();

  const handleFaveButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // add toast to let user know that they need to login to use fave feature
    if (!currentUser) navigate("/login");
    // toggleFave if logged in
    const isFaved = currentUser.favorite_products.includes(productId);

    // optiomistic update
    setCurrentUser((prev) => ({
      ...prev,
      favorite_products: isFaved
        ? prev.favorite_products.filter((id) => id !== productId)
        : [...prev.favorite_products.productId],
    }));
  };
  return (
    <button className="heart-wrapper" onClick={(e) => handleFaveButtonClick(e)}>
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
