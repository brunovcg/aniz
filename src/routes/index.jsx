import { Route, Routes } from "react-router-dom";
import Menu from "../views/Menu";


const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Menu />} />
    </Routes>
  );
};

export default Router;