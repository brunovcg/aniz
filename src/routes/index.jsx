import { Route, Routes } from "react-router-dom";
import Menu from "../views/Menu";
import Manager from "../views/Manager";
import Login from "../views/Login";
import Home from "../views/Home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:userId" element={<Menu />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/manager" element={<Manager />} />
    </Routes>
  );
};

export default Router;
