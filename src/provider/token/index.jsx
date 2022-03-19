import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, endpoints } from "../../services";
import { toast } from "react-toastify";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("@menu-manager:token")) || ""
  );
  const [headers, setHeaders] = useState({ Authorization: "Token " + token });

  const navigate = useNavigate();

  const getToken = () => {
    setToken("");
  };

  const logout = () => {
    navigate("/");
    setToken("");
    sessionStorage.clear();
  };

  const login = (data) => {
    api()
      .post(endpoints.user.login, data)
      .then((res) => {
        sessionStorage.setItem(
          "@menu-manager:token",
          JSON.stringify(res.data.token)
        );
        setToken(res.data.token);
        navigate("/manager");
        toast.success("Bemvindo!");
      })
      .catch((err) => {
        if (!err.response) {
          toast.error("Servidor fora do ar");
        } else {
          if (err.response.status === 401) {
            toast.error("Usuário ou/e senha não conferem");
          }
        }
      });
  };

  useEffect(() => {
    setHeaders({ Authorization: "Token " + token });
  }, [token]);

  return (
    <UserContext.Provider value={{ token, getToken, logout, headers, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
