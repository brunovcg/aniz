import { FaArrowUp, FaArrowDown, FaPowerOff, FaTrash } from "react-icons/fa";
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
        <Button circle width="40px" height="40px"><FaTrash/></Button>
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
        >
          <FaArrowUp />
        </Button>
        <Button
          circle
          height="40px"
          width="40px"
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
