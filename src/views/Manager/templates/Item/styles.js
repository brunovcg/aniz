import styled from "styled-components";
import {configs} from "../../../../configs"

const {mobileBreakpoint} = configs


const Styled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border: 2px dotted black;
  padding: 5px;
  background-color: var(--dark-grey);

  .buttons {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
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

      @media (max-width: ${`${mobileBreakpoint}px`}x) {
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
