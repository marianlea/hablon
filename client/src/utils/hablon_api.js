import axios from "axios";

// api
const API_URL = import.meta.env.VITE_API_URL;

// authorisation
export const login = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
  } catch (err) {
    if (err.response) {
      console.error(err);
      throw err.response.data;
    } else {
      throw { error: "Network error occured." };
    }
  }
};

// vendors
export const signupVendor = async (vendorData) => {
  try {
    const res = await axios.post(`${API_URL}/vendors/signup`, vendorData);
    return res.data;
  } catch (err) {
    if (err.response) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};

export const fetchAllVendors = async () => {
  try {
    const res = await axios.get(`${API_URL}/vendors`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchVendorWithProducts = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/vendors/${id}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// products
export const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchProductWithVendor = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchProductWithVendorAndListings = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/products/${id}/page`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// users
export const fetchAllUsers = async () => {
  try {
    const res = await axios.get(`${API_URL}/users`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchUserWithFaveProducts = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/users/${id}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
