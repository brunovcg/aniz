import styled from "styled-components";
import { configs } from "../../configs";
const { mobileBreakpoint } = configs;

const Styled = styled.div`
  background-color: var(--white-original);
  border: var(--black) solid 3px;
  border-radius: 20px;
  padding: 20px;
  width: 95%;

  h2 {
    text-align: center;
    width: 100%;
  }

  .boxLabels {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${`${mobileBreakpoint}px`}) {
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .colors {
      display: flex;
      justify-content: flex-start;
      align-items: end;
      margin-bottom: 30px;
      @media (max-width: ${`${mobileBreakpoint}px`}) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px 5px;
        width: 100%;
      }
    }

    .urls {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px 0;
    }
  }
`;

export default Styled;
