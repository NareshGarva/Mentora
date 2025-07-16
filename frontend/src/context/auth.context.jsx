import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLogin] = useState(false);

  const login = (userData) => {setUser(userData); setLogin(true)};
  const logout = () => {setUser(null);
    setLogin(false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };        
export default AuthProvider;   