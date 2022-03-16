import styled from "styled-components";
import { configs } from "../../configs";

const Styled = styled.div`
  background-image: url(${configs.backgroundImage});
  background-repeat: repeat;
  background-size: 100vw auto;
  background-attachment: scroll;
  width: 100%;
  height: 100vh;

  .transparent {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  

    h2 {
      color: var(--white);
    }

    .login-box {
      
      width: 100%;
      margin-bottom: 50px;
      display: flex;
       justify-content: center;
      .input-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
      }
    }
  }
`;

export default Styled;
