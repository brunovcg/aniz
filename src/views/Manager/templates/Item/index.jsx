import { FaArrowUp, FaArrowDown, FaPlus } from "react-icons/fa";
import { useState } from "react";
import DivInput from "../../../../components/DivInput";
import Button from "../../../../components/Button";
import Styled from "./styles";

const Item = ({ item }) => {
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
      
        <Button backgroundColor="var(--blue)">
          <FaArrowUp />
        </Button>
        <Button backgroundColor="var(--blue)">
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
          fontSize="14px"
          value={item?.desc}
        />
      </div>
    </Styled>
  );
};

export default Item;
