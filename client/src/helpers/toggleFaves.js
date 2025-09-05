import { useCurrentUser } from "../context/CurrentUserContext";

const toggleFave = (productId = null, vendorId = null) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
};

export default toggleFave;
