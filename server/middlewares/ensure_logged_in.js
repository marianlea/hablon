import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.JWT_SECRET;

const ensureLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token, authorisation denied." });
    }

    const decodedToken = jwt.verify(token, SECRET);
    req.userData = { userId: decodedToken.id };
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default ensureLoggedIn;
