import { useMenu } from "../../provider/menuProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Aniz from "./templates/aniz";
import VoCema from "./templates/vocema";

const Menu = () => {
  const { menu, getMenu } = useMenu();
  const { userId } = useParams();

  const renderOptions = {
    2 : <Aniz/>,
    3 : <VoCema/>
  }

  useEffect(() => {
    getMenu(userId);
    /* eslint-disable-next-line*/
  }, [menu]);

  return <>{renderOptions[userId]}</>;
};

export default Menu;
