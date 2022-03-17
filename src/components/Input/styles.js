import styled from "styled-components";

const Styled = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    max-width: 400px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--light-green);
    font-size: 17px;
    color: var(--light-green);
    font-weight: bold;
    padding-left: 10px;

    ::placeholder {
      color: var(--white);
      font-weight: bold;
    }
  }
  div {
    width: 100%;
    max-width: 400px;
    background: ${props=> props.error && "var(--red)"};
    color: var(--yellow);
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Styled;
