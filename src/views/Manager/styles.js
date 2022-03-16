import styled from "styled-components"


const Styled = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

header{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 15vh;

}

.container{
  background-color: var(--light-grey);
  padding: 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 15px;

  }
}
`

export default Styled