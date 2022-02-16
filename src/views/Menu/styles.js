import logo from "../../assets/images/fundo.jpg";
import styled from "styled-components";

const Styled = styled.div`
  background-image: url(${logo});
  background-repeat: repeat;
  background-size: 100vw auto;
  background-attachment: scroll;

  /* background: #232526;  
  background: -webkit-linear-gradient(to right, #414345, #232526); 
  background: linear-gradient(to right, #414345, #232526);  */

  width: 100%;

  .transparent {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-insta {
      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .icon {
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;

          :hover {
            color: var(--light-green);
          }

          span {
            margin-left: 10px;
          }
        }
      }

      .logo-box {
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.8);
        margin-top: 20px;
        border-radius: 30px;
        img {
          max-width: 80%;
        }

        @media (max-width: 768px) {
          width: 70%;
        }
      }
    }

    .box {
      width: 100%;
      margin-top: 30px;
      width: 70%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;

      @media (max-width: 768px) {
        margin-top: 10px;
        width: 95%;
      }

      h2 {
        color: var(--white);
        background: var(--light-red);
        padding: 5px 30px;
        border-radius: 20px;
        margin: 40px 0 0 0;
      }

      section {
        width: 100%;

        article {
          margin: 25px 30px;

          @media (max-width: 768px) {
            margin: 25px 20px;
          }

          .title-price {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 26px;
            color: var(--white);
            font-weight: bold;

            @media (max-width: 768px) {
              font-size: 18px;

              .price {
                width: 30%;
                text-align: end;

                @media (max-width: 768px) {
                  width: 40%;
                }
              }
            }
          }

          .desc {
            color: var(--light-green);
            font-size: 14px;
            font-weight: bold;

            @media (max-width: 768px) {
              margin-top: 5px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export default Styled;
