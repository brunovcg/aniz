import Styled from "./styles";

const Input = ({ ...rest }) => {
  return (
    <Styled>
      <input {...rest} />
    </Styled>
  );
};

export default Input;
