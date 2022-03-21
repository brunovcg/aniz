import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";
import { FaSignOutAlt, FaPlus, FaBars } from "react-icons/fa";
import { useUser } from "../../provider/token";
import React,{useEffect} from "react";
import AccordionCustom from "../../components/AccordionCustom";
import { useNavigate } from "react-router-dom";

const Manager = () => {
  const { menu, addCategory,  getMenu} = useMenu();
  const { logout,userId, token } = useUser();

  const navigate = useNavigate();

  useEffect(() => {

    getMenu(userId);
    /* eslint-disable-next-line */
  }, []);

  if (!token){
    navigate(`/login/`)
  }

  return (
    <Styled>
      <header>
        <h2>Menu Manager</h2>
        <div className="button-box"> 
        <Button
          width="40px"
          height="40px"
          fontSize="20px"
          margin="0 50px"
          backgroundColor= "var(--green)"
          circle
          onClick={() => navigate(`/restaurante/${userId}`)}
        >
          <FaBars/>
        </Button>
        <Button
          width="40px"
          height="40px"
          fontSize="20px"
          margin="0 50px"
          circle
          onClick={() => logout()}
        >
          <FaSignOutAlt />
        </Button>
        </div>
      </header>

      <div className="container">
        <Button backgroundColor="var(--blue)" onClick={() => addCategory()}>
          <FaPlus /> &nbsp; Categoria
        </Button>

        <AccordionCustom
          margin="10px 0 0 0"
          list={menu}
          Component={Category}
          idKey={"id"}
          titleKey={"category"}
          backgroundColor="var(--grey)"
        />

        {menu.length === 0 && (
          <div className="no-items">Não existem categorias cadastradas</div>
        )}
      </div>
    </Styled>
  );
};

export default Manager;
