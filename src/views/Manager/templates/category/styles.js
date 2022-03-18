import styled from "styled-components";
import { configs } from "../../../../configs";

const { mobileBreakpoint } = configs;

const Styled = styled.div`
  margin: 15px 0;
  padding: 15px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: var(--grey); */

  @media (max-width: ${`${mobileBreakpoint}px`}) {
    width: 100%;
    padding: 10px;
  }

  .header {
    display: flex;
    width: 95%;
    justify-content: center;

    .buttons {
      display: flex;
      align-items: center;
      margin: 10px 0;
      width: 50%;
      background-color: var(--dark-grey);
      justify-content: space-around;
      padding: 5px 0;

      @media (max-width: ${`${mobileBreakpoint}px`}) {
        flex-wrap: wrap;
        width: 100%;
      }

      button {
        height: 40px;
      }
    }
  }

  .labels {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    background-color: var(--blue);
    width: 100%;
    color: var(--white);
  }

  .title-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${`${mobileBreakpoint}px`}) {
      flex-direction: column;
    }

    .div-input-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .description {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    background-color: white;
    align-items: center;
  }

  .itens-box {
    width: 100%;
    margin-top: 15px;

    .itens-label {
      background-color: var(--blue);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      color: var(--white);
    }
  }

  .no-item{
    width: 100%;
    text-align: center;
    background-color: var(--light-grey);
  }
`;

export default Styled;
