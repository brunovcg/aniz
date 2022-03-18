import Button from "../Button";
import React, { useImperativeHandle, useState } from "react";
import Styled from "./styles";
import { FaCheck, FaEdit, FaUndo } from "react-icons/fa";

const DivInput = React.forwardRef(
  (
    {
      value,
      edit,
      fontSize,
      height,
      fontFamily,
      disabled,
      color,
      type = "input",
      onClick,
      index,
      keyValue,
    },
    ref
  ) => {
    const [show, setShow] = useState(edit);
    const [inputValue, setInputValue] = useState(value);

    useImperativeHandle(ref, () => {
      return { show, inputValue };
    });

    const save = () => {
      onClick(index, keyValue, inputValue);
      setShow(false);
    };

    const cancel = () => {
      setInputValue(value);
    };

    return (
      <Styled
        fontSize={fontSize}
        fontFamily={fontFamily}
        show={show}
        disabled={disabled}
        height={height}
        color={color}
      >
        <div className="input-div">
          {show && type === "input" ? (
            <input
              ref={ref}
              className="input-change"
              value={inputValue}
              onChange={(evt) => setInputValue(evt.target.value)}
            />
          ) : show && type === "textarea" ? (
            <textarea
              ref={ref}
              className="input-change"
              value={inputValue}
              onChange={(evt) => setInputValue(evt.target.value)}
            />
          ) : (
            <div className="show-div">{inputValue}</div>
          )}
        </div>
        <div className="button-box">
          {!show && (
            <Button
              disabled={disabled}
              backgroundColor="var(--yellow)"
              onClick={() => setShow(true)}
              fontSize="30px"
              circle
            >
              <FaEdit />
            </Button>
          )}
          {show && (
            <Button onClick={cancel} circle>
              <FaUndo />
            </Button>
          )}
          {show && (
            <Button backgroundColor="var(--light-green)" circle onClick={save}>
              <FaCheck />
            </Button>
          )}
        </div>
      </Styled>
    );
  }
);

export default DivInput;
