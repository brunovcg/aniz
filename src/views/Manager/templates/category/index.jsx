import Button from "../../../../components/Button";
import Item from "../Item";
import Styled from "./styles";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaPowerOff,
  FaTrash,
} from "react-icons/fa";
import React, { useState, useRef } from "react";
import { useMenu } from "../../../../provider/menuProvider";
import DivInput from "../../../../components/DivInput";

const Category = React.forwardRef(({ category, index, menuLength }, ref) => {
  const { removeCategory, moveCategory, toogleCategoryStatus, modifyCategory } =
    useMenu();

  const titleRef = useRef(null);
  const descRef = useRef(null);

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
            onClick={() => removeCategory(category.categoryId)}
          >
            <FaTrash />
          </Button>
          <Button
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
            onClick={() => moveCategory(index, "up")}
          >
            <FaArrowUp />
          </Button>
          <Button
            disabled={index === menuLength - 1 && true}
            backgroundColor="var(--blue)"
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
            value={category?.category}
            color="var(--red)"
            onClick={modifyCategory}
            keyValue="category"
            index={index}
          />
        </div>
      </div>

      <div className="description">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: disabled ? "var(--grey)" : "var(--blue)",
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
          onClick={modifyCategory}
          keyValue="desc"
          index={index}
        />
      </div>

      <div className="category-box">
        {!disabled &&
          category?.items.map((item, index) => (
            <Item
              key={item.itemId}
              item={item}
              index={index}
              itemsLength={category.items.length}
            />
          ))}
      </div>
    </Styled>
  );
});

export default Category;
