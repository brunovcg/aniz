import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const getToken = () => {
    setToken("");
  };
  const logout = () => {
    navigate("/");
    setToken("");
  };

  return (
    <UserContext.Provider value={{ token, getToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
