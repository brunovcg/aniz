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
import React, { useState, useRef } from "react";
import { useMenu } from "../../../../provider/menuProvider";
import DivInput from "../../../../components/DivInput";
import { useModal } from "../../../../provider/modal";

const Category = React.forwardRef(({ item, index, itemsLength }, ref) => {
  const {
    removeCategory,
    moveCategory,
    toogleCategoryStatus,
    modifyCategory,
    addItem,
  } = useMenu();

  const { openModal, modalReset } = useModal();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const [disabled, setDisabled] = useState(!item.active);

  const handleDisable = (index) => {
    toogleCategoryStatus(index);
    setDisabled(!disabled);
  };

  const handleClick = (key, value) => {
    modifyCategory(index, key, value);
  };

  return (
    <Styled disabled={disabled} ref={ref}>
      <div className="header">
        <div className="buttons">
          <Button
            width="40px"
            circle
            onClick={() =>
              openModal(
                "Remover Categoria",
                <div>
                  Tem certeza que quer remover a categoria{" "}
                  <span
                    style={{
                      color: "var(--blue)",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {item?.category}
                  </span>
                  ? Essa ação não poderá ser desfeita.
                </div>,
                [
                  {
                    text: <FaTrash />,
                    onClick: () => {
                      removeCategory(item.id);
                      modalReset();
                    },
                    backgroundColor: "var(--regular-red)",
                  },
                ]
              )
            }
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
          <Button
            disabled={disabled}
            backgroundColor="var(--light-green)"
            onClick={() => addItem(index)}
          >
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
        <div className="labels">CATEGORIA</div>
        <div className="div-input-box">
          <DivInput
            ref={titleRef}
            disabled={disabled}
            fontSize="16px"
            value={item?.category}
            onClick={() => {
              handleClick("category", titleRef.current.inputValue);
            }}
            keyValue="category"
            index={index}
          />
        </div>
      </div>

      <div className="description">
        <div className="labels">DESCRIÇÃO</div>
        <DivInput
          ref={descriptionRef}
          type="textarea"
          height="80px"
          disabled={disabled}
          fontSize="14px"
          value={item?.description}
          onClick={() => handleClick("description", descriptionRef.current.inputValue)}
          keyValue="desc"
          index={index}
        />
      </div>

      {!disabled && (
        <div className="itens-box">
          <div className="labels">ITENS</div>
          <AccordionCustom
            generalColor="var(--green)"
            fontFamily="arial"
            fontSize="16px"
            list={item?.items}
            Component={Item}
            idKey={"id"}
            titleKey={"title"}
            backgroundColor="var(--grey)"
            categoryIndex={index}
          />

          {item.items.length === 0 && (
            <div className="no-item">Não Existem itens cadastrados</div>
          )}
        </div>
      )}
    </Styled>
  );
});

export default Category;
