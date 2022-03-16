import { createContext, useState, useContext } from "react";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const getToken = () => {
    setToken("");
  };

  const logout = () => {

    setToken("")
  }

  return (
    <UserContext.Provider value={{ token, getToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
