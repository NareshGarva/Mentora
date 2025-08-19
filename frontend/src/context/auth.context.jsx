import { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance'
import { showToast } from '../components/Toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
 console.log(user)
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const login = (userData) => {
    // setUser(userData);
    fetchUser(userData.username, userData.role)
    setIsLoggedIn(true);
    setIsLoading(false);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = async () => {
    try {
      const response = await axiosInstance.post("/auth/logout", {}, {
        withCredentials: true,
      });
      showToast(`${response.data.message} /login`,"success")
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
        setUser(response.data.user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
      }
    } catch (error) {
      console.error("Failed to fetch user on refresh", error);
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    } finally {
      setIsLoading(false);
    }
  };


  const verifyUser = async (username = user.username, role = user.role) => {
    try {
      if (!username || !role) {
        console.log("User data not available for verification");
        return false;
      }
      
      const res = await axiosInstance.get(`/user/verify-identity/${username}/${role}`, {
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
    await fetchUser();
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