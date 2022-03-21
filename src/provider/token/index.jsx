import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, endpoints } from "../../services";
import { toast } from "react-toastify";

const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("@menu-manager:token")) || ""
  );
  const [userId,setUserId]= useState(JSON.parse(sessionStorage.getItem("@menu-manager:userId")) || 0)
  const [configs, setConfigs] = useState({headers:{ Authorization: "Token " + token }});

  const navigate = useNavigate();

  const getToken = () => {
    setToken("");
  };

  const logout = () => {
    navigate(`/login`);
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
        sessionStorage.setItem(
          "@menu-manager:userId",
          JSON.stringify(res.data.user_id)
        );
        setToken(res.data.token);
        setUserId(res.data.user_id)
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
    setConfigs({headers:{ Authorization: "Token " + token }});
  }, [token]);

  return (
    <UserContext.Provider value={{ token, getToken, logout, configs, login, userId}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
