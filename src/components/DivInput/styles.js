import styled from "styled-components";

const Styled = styled.div`
  display: flex;

  height: 60px;
  justify-content: center;
  background-color: var(--light-grey);
  border: ${(props) => (props.show ? "1px dotted black" : "none")};
  width: 100%;
  padding: 10px 3px;

  .input-div {
    display: flex;
    width: 70%;
    align-items: center;
    height: 100%;

    @media (max-width: 768px) {
      width: 65%;
    }

    .input-change {
      height: 60%;
      padding-left: 5px;
      width: 100%;
      font-size: 20px;

    
    }

    .show-div {
      color: ${props=> props.disabled && "var(--grey)"};
      font-weight: bold;
      font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
      font-family: ${(props) =>
        props.fontFamily ? props.fontFamily : "arial"};
    }
  }

  .button-box {
    display: flex;

    height: 100%;
    align-items: center;

    button {
      margin-left: 20px;
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }
`;

export default Styled;
