import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
  if (!token) return { valid: false, error: "Missing token" };

  try {
    const decoded = jwtDecode(token);
    const now = Date.now().valueOf() / 1000; // in seconds

    if (decoded.exp && decoded.exp < now)
      return { valid: false, error: "Token expired" };

    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, error: "Invalid token" };
  }
};

export default isTokenValid;
