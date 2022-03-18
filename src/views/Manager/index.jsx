import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";
import { FaSignOutAlt, FaPlus } from "react-icons/fa";
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
          circle
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
          <FaPlus/> &nbsp; Categoria
        </Button>

        <AccordionCustom
          margin="10px 0 0 0"
          list={menu}
          Component={Category}
          idKey={"categoryId"}
          titleKey={"category"}
          backgroundColor="var(--grey)"
        />
      </div>
    </Styled>
  );
};

export default Manager;
