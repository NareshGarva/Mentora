import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "Mentor",
    username: "",
  });

  console.log(`user data is : ${user.name}`)
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", `true`);
  };

  const logout = async () => {
    try {
        const response = await axiosInstance.post("/auth/logout", {
          withCredentials: true,
        });
        alert(response.data.message);
        setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    return true;
      } catch (error) {
        console.error("Failed to fetch user on refresh", error);
        return false;
      }
      
  };



  const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/user/get-user`, {
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
