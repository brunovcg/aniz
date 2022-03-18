import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";
import { FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../../provider/token";
import React from "react";
import AccordionCustom from "../../components/AccordionCustom";

const Manager = () => {
  const { menu, addCategory } = useMenu();
  const { logout } = useUser();

  return (
    <Styled>
      <button onClick={() => console.log(menu)}>teste</button>
      <header>
        <h2>Menu Manager</h2>
        <Button
          width="40px"
          height="40px"
          fontSize="20px"
          margin="0 50px"
          onClick={() => logout()}
        >
          <FaSignOutAlt />
        </Button>
      </header>

      <div className="container">
        <Button
          backgroundColor="var(--light-green)"
          onClick={() => addCategory()}
        >
          Adicionar Categoria
        </Button>

        <AccordionCustom
          list={menu}
          Component={Category}
          idKey={"categoryId"}
          titleKey={"category"}
        />
   
      </div>
    </Styled>
  );
};

export default Manager;
