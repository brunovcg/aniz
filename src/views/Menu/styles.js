import logo from "../../assets/images/cardapio.png";
import styled from "styled-components";

const Styled = styled.div`
  background-image: url(${logo});
  background-repeat: repeat;
  background-size: 100% auto;
  background-attachment: scroll;
  width: 100%;

  .transparent {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;

    .box {
      width: 100%;
      margin-top: 260px;
      width: 70%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;

      @media (max-width: 768px) {
        margin-top: 40px;
        width: 90%;
      }

      h2 {
        color: var(--purple);
        margin: 40px 0 0 0;
        font-size: 30px;
      }

      section {
        width: 100%;
        article {
          margin: 30px 30px;

          .title-price {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 26px;
            color: var(--purple);
            font-weight: bold;

            @media (max-width: 768px) {
              font-size: 18px;

            

              .price{
                width: 30%;
                text-align: end;
              }
            }
          }

          .desc {
            color: var(--purple);
            font-size: 17px;

            @media (max-width: 768px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;

export default Styled;
