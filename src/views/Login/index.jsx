import Styled from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState({ text: "", error: false });
  const [password, setPassword] = useState({ text: "", error: false });

  const navigate= useNavigate()

  const handleSubmit = () => {



      if (!username.text) {
        setUsername({...username, error: true})

        
      }
      if (!password.text) {
        setUsername({...password, error: true})
      }

      if (password.text && username.text){

        console.log({username: username.text, password: password.text})

        navigate("/manager")

      }

      

      
  };

  return (
    <Styled>
      
      <div className="transparent">
        <div className="header">
        <Button onClick={()=> navigate("/")}>VOLTAR</Button>
        </div>
        <h2>LOGIN</h2>

        <div className="login-box">
          <div className="input-box">
            <Input
              placeholder="digite o usuário"
              onChange={(evt) => setUsername({...username, text: evt.target.value})}
              type="text"
              error= {username.error ? "Usuário necessário" : ""}
            />

            <Input
              placeholder="digite a senha"
              type="password"
              onChange={(evt) => setPassword({...password, text: evt.target.value})}
              error= {username.error ? "Senha necessária" : ""}
            />

            <Button onClick={handleSubmit}>LOGIN</Button>
          </div>
        </div>

        
      </div>
    </Styled>
  );
};

export default Login;
