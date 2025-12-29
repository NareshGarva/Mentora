// src/lib/axiosInstance.js (or wherever you keep it)
import axios from "axios";

// Use Vite's import.meta.env (this is the correct way in Vite)
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error("VITE_API_BASE_URL is not defined! Check your .env file.");
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,           // Fixed: no quotes, no process.env
  withCredentials: true,          // This sends cookies (refreshToken/accessToken)
});

// Response interceptor for 401 → auto refresh token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired (401) or server error (500) and not already retried
    if (
      (error.response?.status === 401 || error.response?.status === 500) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Call refresh token endpoint
        await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        // Retry the original request with new access token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        localStorage.removeItem("isLoggedIn");
        // Optional: redirect to login
        // window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
