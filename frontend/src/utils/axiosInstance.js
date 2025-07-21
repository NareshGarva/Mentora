import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401 || error.response?.status === 500) && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post('http://localhost:3000/api/auth/refresh-token', {}, {
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