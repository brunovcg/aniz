import { FaArrowUp, FaArrowDown, FaPowerOff, FaTrash } from "react-icons/fa";
import { useState, useRef } from "react";
import DivInput from "../../../../components/DivInput";
import Button from "../../../../components/Button";
import Styled from "./styles";
import { useMenu } from "../../../../provider/menuProvider";
import { useModal } from "../../../../provider/modal";

const Item = ({ item, index, itemsLength, categoryIndex }) => {
  const [disabled, setDisabled] = useState(false);

  const { toogleItemStatus, moveItem, removeItem, modifyItem } = useMenu();
  const { openModal, modalReset } = useModal();
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleDisable = () => {
    setDisabled(!disabled);
    toogleItemStatus(categoryIndex, index);
  };

  const handleClick = (key, value) => {
    modifyItem(categoryIndex, index, key, value);
  };

  return (
    <Styled>
      <div className="buttons">
        <Button
          circle
          width="40px"
          height="40px"
          onClick={() =>
            openModal(
              "Remover Item",
              <div>
                Tem certeza que quer remover o item{" "}
                <span
                  style={{
                    color: "var(--light-green)",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {item?.title}
                </span>
                ? Essa ação não poderá ser desfeita.
              </div>,
              [
                {
                  text: <FaTrash />,
                  onClick: () => {
                    removeItem(categoryIndex, item.itemId);
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
          width="40px"
          backgroundColor={disabled ? "var(--light-green)" : "var(--yellow)"}
          onClick={handleDisable}
          circle
        >
          <FaPowerOff />
        </Button>
        <Button
          backgroundColor="var(--blue)"
          circle
          height="40px"
          width="40px"
          disabled={index === 0 ? true : false}
          onClick={() => moveItem(categoryIndex, index, "up")}
        >
          <FaArrowUp />
        </Button>
        <Button
          circle
          height="40px"
          width="40px"
          backgroundColor="var(--blue)"
          disabled={index === itemsLength - 1 ? true : false}
          onClick={() => moveItem(categoryIndex, index, "down")}
        >
          <FaArrowDown />
        </Button>
      </div>

      <div className="item-price">
        <div className="title">
        <div className="item-labels">ITEM</div>
          <DivInput
            value={item?.title}
            disabled={disabled}
            ref={titleRef}
            onClick={() =>
              handleClick(
                "title",
                titleRef.current.inputValue
              )
            }
          />
        </div>
        <div className="price">
        <div className="item-labels">PREÇO</div>
          <DivInput
            value={item?.price}
            disabled={disabled}
            onClick={() =>
              handleClick(
                "price",
                priceRef.current.inputValue
              )
            }
            ref={priceRef}
          />
        </div>
      </div>
      <div className="desc">
      <div className="item-labels">DESCRIÇÃO</div>
        <DivInput
          disabled={disabled}
          type="textarea"
          height="60px"
          value={item?.desc}
          onClick={() =>
            handleClick(
              "desc",
              descriptionRef.current.inputValue
            )
          }
          ref={descriptionRef}
        />
      </div>
    </Styled>
  );
};

export default Item;
