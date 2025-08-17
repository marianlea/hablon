import toast from "react-hot-toast";
import { useCurrentUser } from "../context/CurrentUserContext";
import { useMenu } from "../context/MenuVisibilityContext";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const { setCurrentUser } = useCurrentUser();
  const { setIsMenuVisible } = useMenu();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsMenuVisible((prev) => !prev);
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/");
    toast.success("successful logout");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
