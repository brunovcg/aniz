import logo from "../../assets/images/cardapio.png";
import styled from "styled-components";

const Styled = styled.div`
  /* background-image: url(${logo});
  background-repeat: repeat;
  background-size: 100% auto;
  background-attachment: scroll; */
  background: #232526;  
  background: -webkit-linear-gradient(to right, #414345, #232526); 
  background: linear-gradient(to right, #414345, #232526); 
  width: 100%;

  .transparent {
    width: 100%;
    min-height: 100vh;
    /* background-color: rgba(255, 255, 255, 0.7); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-box{
      display: flex; 
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.8);
      margin-top: 20px;
      border-radius: 30px;
      img{
        max-width: 80%;
      }

      @media (max-width: 768px) {
        width: 70%;
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
        width: 90%;
      }

      h2 {
        color: var(--white);
        background: var(--light-red);
        padding: 5px 50px;
        border-radius: 20px;
        margin: 40px 0 20px 0;
        
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
            color: var(--white);
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
            color: var(--light-green);
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
