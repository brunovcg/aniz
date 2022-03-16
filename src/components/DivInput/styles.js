import styled from "styled-components"

const Styled = styled.div`  

display: flex;

height: 60px;
justify-content: center;
background-color: var(--light-grey);

width: 100%;
padding: 10px 30px;

.input-div{
  display: flex;
  width: 70%;
  align-items: center;
  height: 100%;

  .input-change{
    height: 60%;
    padding-left: 5px;
    width: 80%;
  
  }

  .show-div{
    font-weight: bold;

  }
}

.button-box{
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;

  button{
    margin-left: 10px;
  }
}



`

export default Styled