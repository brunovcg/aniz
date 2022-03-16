import Styled from "./styles";

const Input = ({error, ...rest }) => {
  return (
    <Styled error={error}>
      <input {...rest} />
      <div>{error}</div>
    </Styled>
  );
};

export default Input;
