import Button from "../Button";
import React, { useImperativeHandle, useState } from "react";
import Styled from "./styles";
import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";

const DivInput = React.forwardRef(
  (
    { value, edit, fontSize, height, fontFamily, disabled, color, type = "input" },
    ref
  ) => {
    const [show, setShow] = useState(edit);
    const [inputValue, setInputValue] = useState(value);

    useImperativeHandle(ref, () => {
      return { show };
    });

    const save = () => {
      setShow(false);
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
              className="input-change"
              value={inputValue}
              onChange={(evt) => setInputValue(evt.target.value)}
            />
          ) : show && type === "textarea" ? (
            <textarea
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
            >
              <FaEdit />
            </Button>
          )}
          {show && (
            <Button onClick={() => setShow(false)}>
              <FaTimes />
            </Button>
          )}
          {show && (
            <Button backgroundColor="var(--light-green)" onClick={save}>
              <FaCheck />
            </Button>
          )}
        </div>
      </Styled>
    );
  }
);

export default DivInput;
