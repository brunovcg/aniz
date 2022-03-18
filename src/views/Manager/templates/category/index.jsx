import Button from "../../../../components/Button";
import Item from "../Item";
import AccordionCustom from "../../../../components/AccordionCustom";
import Styled from "./styles";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaPowerOff,
  FaTrash,
} from "react-icons/fa";
import React, { useState } from "react";
import { useMenu } from "../../../../provider/menuProvider";
import DivInput from "../../../../components/DivInput";

const Category = React.forwardRef(({ item, index, itemsLength }, ref) => {
  const { removeCategory, moveCategory, toogleCategoryStatus, modifyCategory } =
    useMenu();

  const [disabled, setDisabled] = useState(false);

  const handleDisable = (index) => {
    toogleCategoryStatus(index);
    setDisabled(!disabled);
  };

  return (
    <Styled disabled={disabled} ref={ref}>
      <div className="header">
        <div className="buttons">
          <Button
            width="40px"
            circle
            onClick={() => removeCategory(item.categoryId)}
          >
            <FaTrash />
          </Button>
          <Button
            circle
            width="40px"
            backgroundColor={disabled ? "var(--light-green)" : "var(--yellow)"}
            onClick={() => handleDisable(index)}
          >
            <FaPowerOff />
          </Button>
          <Button disabled={disabled} backgroundColor="var(--light-green)">
            <FaPlus /> Item
          </Button>
          <Button
            disabled={index === 0 && true}
            backgroundColor="var(--blue)"
            circle
            width="40px"
            onClick={() => moveCategory(index, "up")}
          >
            <FaArrowUp />
          </Button>
          <Button
            disabled={index === itemsLength - 1 && true}
            backgroundColor="var(--blue)"
            circle
            width="40px"
            onClick={() => moveCategory(index, "down")}
          >
            <FaArrowDown />
          </Button>
        </div>
      </div>

      <div className="title-buttons">
        <div className="div-input-box">
          <DivInput
            disabled={disabled}
            fontSize="18px"
            value={item?.category}
            color="var(--red)"
            onClick={modifyCategory}
            keyValue="category"
            index={index}
          />
        </div>
      </div>

      <div className="description">
        <div className="description-label">DESCRIÇÃO</div>

        <DivInput
          type="textarea"
          height="80px"
          disabled={disabled}
          fontSize="16px"
          value={item?.description}
          onClick={modifyCategory}
          keyValue="desc"
          index={index}
        />
      </div>

      {!disabled && <div className="itens-box">
        <div className="itens-label">ITENS</div>
        <AccordionCustom
          fontFamily="arial"
          fontSize="16px"
          list={item?.items}
          Component={Item}
          idKey={"itemId"}
          titleKey={"title"}
          backgroundColor="var(--grey)"
        />
      </div>}
    </Styled>
  );
});

export default Category;
