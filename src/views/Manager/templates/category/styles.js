import styled from "styled-components";

const Styled = styled.div`
  margin: 40px 0;
  border: 1px solid black;
  padding: 15px;
  width: 95%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  .title-buttons {
    display: flex;
    justify-content: space-around;
    margin: 20px 0 40px 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .div-input-box {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      margin: 10px 0;
      width: 50%;

      justify-content: space-around;
      border: 1px black solid;
      padding: 5px;

      @media (max-width: 768px) {
        flex-wrap: wrap;
        width: 100%;
      }

      button {
        height: 40px;
      }
    }
  }
`;

export default Styled;
