import styled from "styled-components";
import {configs} from "../../../../configs"
const {mobileBreakpoint} = configs

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;


  .buttons {
    margin: 5px 0;
    display: flex;
    width: 250px;
    justify-content: space-between;

    @media (max-width: ${`${mobileBreakpoint}px`}) {
      width: 100%;
    }

  }

  .item-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;

    @media (max-width: ${`${mobileBreakpoint}px`}) {
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }

    .title {
      width: 60%;

      @media (max-width: ${`${mobileBreakpoint}px`}) {
        width: 100%;
      }
    }

    .price {
      width: 30%;

      @media (max-width: ${`${mobileBreakpoint}px`}) {
        margin-top: 5px;
        width: 100%;
      }
    }
  }

  .desc {
    display: flex;
    width: 100%;
  }
`;

export default Styled;
