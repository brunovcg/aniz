import styled from "styled-components";
import { configs } from "../../configs";

const Styled = styled.div`
  /* background-image: url(${configs.backgroundImage}); */
  /* background-repeat: repeat;
  background-size: 100vw auto;
  background-attachment: scroll; */
  width: 100%;
  height: 100vh;

  .transparent {
    width: 100%;
    height: 100vh;
    background-color: rgba(20, 20, 20, 0.65);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    .header {
      width: 100%;
      padding: 0 50px 30px 0;

      display: flex;
      justify-content: end;
    }

    h2 {
      color: var(--yellow);
      font-family: "arial";
      font-weight: bold;
      font-size: 40px;
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
