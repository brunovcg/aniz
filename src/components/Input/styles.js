import styled from "styled-components";

const Styled = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  

  input {
    width: 100%;
    max-width: 400px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--light-green);
    font-size: 20px;
    color: var(--light-green);
    font-weight: bold;

    ::placeholder{
      color: var(--white);
      font-weight: bold;
    }
  }


`;
export default Styled;
