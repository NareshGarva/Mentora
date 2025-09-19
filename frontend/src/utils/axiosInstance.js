import axios from "axios";
const api = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: api,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401 || error.response?.status === 500) && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post(`${api}/api/auth/refresh-token`, {}, {
          withCredentials: true
        });

        return axiosInstance(originalRequest);
      } catch (refreshError) {
    localStorage.removeItem("isLoggedIn");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;