import { FaArrowUp, FaArrowDown, FaPlus } from "react-icons/fa";
import { useState } from "react";
import DivInput from "../../../../components/DivInput";
import Button from "../../../../components/Button";
import Styled from "./styles";


const Item = ({ item, disabled }) => {

  const [isDisabled, setIsDisabled] = useState(disabled);
  return (
    <Styled>
      <div className='item-price'>
        <h3>{item?.title}</h3>
        <h3>{item?.price}</h3>
      </div>
      <p className='desc'>{item?.desc}</p>
    </Styled>
  );
};

export default Item;
