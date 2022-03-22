import { configs } from "../../configs";
import styled from "styled-components";
const { mobileBreakpoint } = configs;

const Styled = styled.div`
  background-image: url(${configs.backgroundImageAlt});
  background-repeat: repeat;
  background-size: 100vw auto;
  background-attachment: scroll;
  width: 100%;

  .transparent {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 250px;

    .logo-insta {
      @media (max-width: ${`${mobileBreakpoint}px`}) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      /* .icon {
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
      } */

      
    }

    .box {
      width: 100%;
      margin-top: 30px;
      width: 70%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;

      @media (max-width: ${`${mobileBreakpoint}px`}) {
        margin-top: 10px;
        width: 95%;
      }

      section {
        width: 100%;

        .category-title-description {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .category-title {
            color: var(--white);
            background: var(--red);
            padding: 5px 30px;
            border-radius: 20px;
            margin: 40px 0 0 0;
            width: fit-content;
          }

          .category-description {
            margin-top: 20px;
            font-size: 24px;
            color: var(--yellow);
            text-align: center;

            @media (max-width: ${`${mobileBreakpoint}px`}) {
              width: 90%;
            }
          }
        }

        article {
          margin: 25px 30px;

          @media (max-width: ${`${mobileBreakpoint}px`}) {
            margin: 25px 20px;
          }

          .title-price {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 26px;
            color: var(--white);
            font-weight: bold;

            @media (max-width: ${`${mobileBreakpoint}px`}) {
              font-size: 18px;

              .price {
                width: 30%;
                text-align: end;

                @media (max-width: ${`${mobileBreakpoint}px`}) {
                  width: 40%;
                }
              }
            }
          }

          .desc {
            color: var(--light-green);
            font-size: 14px;
            font-weight: bold;

            @media (max-width: ${`${mobileBreakpoint}px`}) {
              margin-top: 5px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  .management {
    width: 100%;
    color: var(--white);
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding-left: 30px;
    padding-bottom: 20px;

    .button-box {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default Styled;
