import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    username: "",
  });
  let isLoggedIn;

  const login = async (userData) => {
    setUser(userData);
    isLoggedIn = true;
    localStorage.setItem("isLoggedIn", `${isLoggedIn}`);
  };

  const logout = () => {
    setUser(null);
    isLoggedIn = false;
    localStorage.removeItem("isLoggedIn", `${isLoggedIn}`);
  };


  const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/get-user", {
          withCredentials: true,
        });
        if (response.data && response.data.user) {
          setUser({
            name: response.data.user.name,
            email: response.data.user.email,
            role: response.data.user.role,
            username: response.data.user.username,
          });
        }
      } catch (error) {
         localStorage.removeItem("isLoggedIn");
        console.error("Failed to fetch user on refresh", error);
      }
    };

  useEffect(() => {
    
    if (localStorage.getItem("isLoggedIn") === "true") {
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
