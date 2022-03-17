import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import DivInput from "../../../../components/DivInput";
import Button from "../../../../components/Button";
import Styled from "./styles";

const Item = ({ item, index, itemsLength }) => {
  const [disabled, setDisabled] = useState(false);

  const handleDisable = () => {
    setDisabled(!disabled);
  };

  return (
    <Styled>
      <div className="buttons">
        <Button>Excluir</Button>
        <Button
          width="80px"
          backgroundColor={disabled ? "var(--light-green)" : "var(--yellow)"}
          onClick={handleDisable}
        >
          {disabled ? "Ativar" : "Desativar"}
        </Button>

        <Button
          backgroundColor="var(--blue)"
          disabled={index === 0 ? true : false}
        >
          <FaArrowUp />
        </Button>
        <Button
          backgroundColor="var(--blue)"
          disabled={index === itemsLength - 1 ? true : false}
        >
          <FaArrowDown />
        </Button>
      </div>

      <div className="item-price">
        <div className="title">
          <DivInput value={item?.title} disabled={disabled} />
        </div>
        <div className="price">
          <DivInput value={item?.price} disabled={disabled} />
        </div>
      </div>
      <div className="desc">
        <DivInput
          disabled={disabled}
          type="textarea"
          height="60px"
          value={item?.desc}
        />
      </div>
    </Styled>
  );
};

export default Item;
