import Button from "../Button";
import React, { useImperativeHandle, useState } from "react";
import Styled from "./styles"

const DivInput = React.forwardRef(({ value, edit }, ref) => {
  const [show, setShow] = useState(edit);
  const [inputValue, setInputValue] = useState(value);

  useImperativeHandle(ref, () => {
    return { show };
  });

  const save = () => {
    setShow(false);
  };

  return (
    <Styled>
      <div className="input-div">
        {show ? (
          <input
          className="input-change"
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
          />
        ) : (
          <div className="show-div">{inputValue}</div>
        )}
      </div>
      <div className="button-box">
      {!show && <Button backgroundColor="var(--yellow)" onClick={() => setShow(true)}>Edit</Button>}
      {show && <Button onClick={() => setShow(false)}>Cancel</Button>}
      {show && <Button backgroundColor="var(--light-green)" onClick={save}>Save</Button>}
      </div>
    </Styled>
  );
});

export default DivInput;
