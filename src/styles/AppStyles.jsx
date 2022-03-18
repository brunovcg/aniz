import styled from "styled-components";
import { configs } from "../configs";

const { mobileBreakpoint } = configs;
const Styled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
  width: 98vw;

  @media (max-width: ${`${mobileBreakpoint}px`}) {
    width: 100%;
  }
`;

export default Styled;
