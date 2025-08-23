import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const loginUser = async (userData) => {
  try {
    const response = await authApi.post("/auth/user/login", userData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { message: "Login failed. Please try again." }
    );
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await authApi.post("/auth/user/register", userData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Registration failed. Please try again.",
      }
    );
  }
};

export const initiateGoogleAuth = () => {
  window.location.href = `${API_URL}/auth/user/google`;
};

export const handleGoogleCallback = async (token) => {
  try {
    const response = await authApi.get("/auth/user/verify-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Google authentication failed." };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete authApi.defaults.headers.common["Authorization"];
};
