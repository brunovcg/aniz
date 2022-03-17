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
    <Styled disabled={disabled}>

      <h2>Category</h2>
      <div className="title-buttons">
        <div className="div-input-box">
          <DivInput
            disabled={disabled}
            fontSize="18px"
            value={category?.category}
            color="var(--light-red)"
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

      <div className="description">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: disabled ? "var(--grey)" : "var(--light-red)",
          }}
        >
          Descrição
        </div>

        <DivInput
        type="textarea"
          height="80px"
          disabled={disabled}
          fontSize="16px"
          value={category?.description}
        />
      </div>


      <div className="category-box">
        {!disabled && category?.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </Styled>
  );
};

export default Category;
