import { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    username: "",
  });
  
  // Add loading state to track when user data is being fetched
  const [isLoading, setIsLoading] = useState(true);
  
  console.log("user", user);
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsLoading(false);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = async () => {
    try {
      const response = await axiosInstance.post("/auth/logout", {}, {
        withCredentials: true,
      });
      alert(response.data.message);
      
      setUser({
        name: "",
        email: "",
        role: "",
        username: "",
      });
      setIsLoggedIn(false);
      setIsLoading(false);
      localStorage.removeItem("isLoggedIn");
      return true;
    } catch (error) {
      console.error("Failed to logout", error);
      setIsLoading(false);
      return false;
    }
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/user/get-user`, {
        withCredentials: true,
      });
      if (response.data && response.data.user) {
        const userData = {
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          username: response.data.user.username,
        };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        // No user data received, clear everything
        setUser({
          name: "",
          email: "",
          role: "",
          username: "",
        });
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
      }
    } catch (error) {
      console.error("Failed to fetch user on refresh", error);
      setUser({
        name: "",
        email: "",
        role: "",
        username: "",
      });
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    } finally {
      setIsLoading(false);
    }
  };

  // Fix: Accept parameters OR use current user state
  const verifyUser = async (username = user.username, role = user.role) => {
    try {
      if (!username || !role) {
        console.log("User data not available for verification");
        return false;
      }
      
      const res = await axiosInstance.get(`/verify-identity/${username}/${role}`, {
        withCredentials: true,
      });
      return res.data.isAuthorized;
    } catch (err) {
      console.log("Verify user error:", err);
      return false;
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      if (localStorage.getItem("isLoggedIn") === "true") {
        await fetchUser();
      } else {
        setIsLoading(false);
      }
    };
    
    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      isLoggedIn, 
      setIsLoggedIn,
      isLoading,
      logout, 
      login, 
      verifyUser,
      fetchUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;