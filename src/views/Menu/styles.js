import { configs } from "../../configs";
import styled from "styled-components";
const { mobileBreakpoint } = configs;

const Styled = styled.div`
  background-image: url(${(props) => props.webStyling.background});
  background-repeat: repeat;
  background-size: 100vw auto;
  background-attachment: scroll;
  width: 100%;

  .transparent {
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => {
      return `rgba(0, 0, 0, ${props.webStyling.transparency_index / 100})`;
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;

    .logo-insta {
      @media (max-width: ${`${mobileBreakpoint}px`}) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .logo-box {
        display: flex;
        justify-content: center;
        width: 80%;
        img {
          color: var(--white);
          @media (max-width: ${`${mobileBreakpoint}px`}) {
            width: 80%;
          }
        }
      }

      .icon {
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: ${(props) => props.webStyling.insta_color};
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
    }

    .box {
      margin-top: 30px;
      width: 80%;
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
            color: ${(props) => props.webStyling.category_color};
            background: ${(props) => props.webStyling.category_background};
            padding: 5px 30px;
            border-radius: 20px;
            margin: 40px 0 0 0;
            width: fit-content;
          }

          .category-description {
            margin-top: 20px;
            font-size: 24px;
            color: ${(props) => props.webStyling.category_description_color};
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
            font-weight: bold;

            .title {
              color: ${(props) => props.webStyling.item_color};
              width: 90%;
            }
            .price {
              color: ${(props) => props.webStyling.price_color};
              width: 10%;
              display: flex;

              .currency{
                width: 20%;
              }
              .value{
                width: 80%;
                text-align: end;
              }
            }

            @media (max-width: ${`${mobileBreakpoint}px`}) {
              font-size: 16px;

              .title {
              width: 78%;
            }

              .price {
                text-align: end;
                width: 22%;
                .currency{
                width: 30%;
              }
              .value{
                width: 70%;
                text-align: end;
              }
                
              }
            }
          }

          .desc {
            color: ${(props) => props.webStyling.item_description_color};
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
