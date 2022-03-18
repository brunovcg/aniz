import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : "35px")};
  justify-content: start;
  border: ${(props) => (props.show ? "1px dotted black" : "none")};
  width: 100%;
  padding: 2px 3px;
  background-color: ${(props) => (props.show ? "var(--white)" : "var(--light-grey)")};;

  .input-div {
    display: flex;
    width: 80%;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    .input-change {
      height: 100%;
      padding-left: 5px;
      width: 100%;
      font-size: 12px;
    }

    .show-div {
      padding-left: 5px;
      color: ${(props) =>
        props.disabled ? "var(--grey)" : props.color && props.color};
      font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
      font-family: ${(props) =>
        props.fontFamily ? props.fontFamily : "arial"};
    }
  }

  .button-box {
    width: 20%;
    display: flex;
    height: 100%;
    justify-content: end;
    align-items: center;

    button {
      width: 30px;
      height: 30px;
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 20px;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export default Styled;
