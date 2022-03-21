import styled from "styled-components";
import { configs } from "../../configs";

const { mobileBreakpoint } = configs;

const Styled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1500px;

  header {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;

    .button-box{
      display: flex;
    }

    h2 {
      @media (max-width: ${`${mobileBreakpoint}px`}) {
        font-size: 40px;
        width: 80%;
        text-align: center;
      }
    }
  }

  .container {
    background-color: var(--light-grey);
    padding: 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: ${`${mobileBreakpoint}px`}) {
      width: 100%;
      padding: 40px 15px;
    }
  }

 .no-items{
   background-color: var(--white);
   padding: 20px;
 }
`;

export default Styled;
