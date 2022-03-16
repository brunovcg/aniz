import Button from "../../../../components/Button";
import Item from "../Item";
import Styled from "./styles";
import { FaArrowUp, FaArrowDown, FaPlus } from "react-icons/fa";
import { useState } from "react";

import DivInput from "../../../../components/DivInput";

const Category = ({ category }) => {
  const [disabled, setDisabled] = useState(false);

  const handleDisable = () => {
    setDisabled(!disabled);
  };

  return (
    <Styled>
      <div className="title-buttons">
        <div className="div-input-box">
          <DivInput
            disabled={disabled}
            fontSize="30px"
            value={category?.category}
          />
        </div>

        <div className="buttons">
          <Button>Excluir</Button>
          <Button
          width="80px"
            backgroundColor={disabled ? "var(--light-green)" : "var(--yellow)"}
            onClick={handleDisable}
          >
            {disabled ? "Ativar" : "Desativar"}
          </Button>
          <Button disabled={disabled} backgroundColor="var(--light-green)">
            <FaPlus /> Item
          </Button>
          <Button disabled={disabled} backgroundColor="var(--blue)">
            <FaArrowUp />
          </Button>
          <Button disabled={disabled} backgroundColor="var(--blue)">
            <FaArrowDown />
          </Button>
        </div>
      </div>

      <h3>{category?.description}</h3>

      <div>
        {category?.items.map((item) => (
          <Item disabled={disabled} key={item.id} item={item} />
        ))}
      </div>
    </Styled>
  );
};

export default Category;
