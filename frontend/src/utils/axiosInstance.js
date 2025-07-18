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
      console.log("Attempting token refresh for:", originalRequest.url);

      try {
        const refreshResponse = await axios.post('http://localhost:3000/api/auth/refresh-token', {}, {
          withCredentials: true
        });
        console.log("Token refresh successful:", refreshResponse.status);
        // Retry the original request with fresh token
        console.log("Retrying original request:", originalRequest.url);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
        
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;