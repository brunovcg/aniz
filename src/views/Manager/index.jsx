import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";
import { FaSignOutAlt, FaPlus } from "react-icons/fa";
import { useUser } from "../../provider/token";
import React,{useEffect} from "react";
import AccordionCustom from "../../components/AccordionCustom";

const Manager = () => {
  const { menu, addCategory,  getMenu} = useMenu();
  const { logout,userId } = useUser();


  useEffect(() => {

    getMenu(userId);
  }, []);

  return (
    <Styled>
      <button onClick={()=> console.log(menu)}>teste</button>
      <header>
        <h2>Menu Manager</h2>
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
      </header>

      <div className="container">
        <Button backgroundColor="var(--blue)" onClick={() => addCategory()}>
          <FaPlus /> &nbsp; Categoria
        </Button>

        <AccordionCustom
          margin="10px 0 0 0"
          list={menu.sort((a,b)=> a.position-b.position)}
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
