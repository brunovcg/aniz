import styled from "styled-components";

const Styled = styled.div`
  margin: 40px 0;
  border: 1px solid black;
  padding: 15px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  .title-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

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

  .description{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding: 10px;
    background-color: white;
    align-items: center;
 
  }

  .category-box{
    width: 100%;

  }
`;

export default Styled;
