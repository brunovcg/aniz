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

      console.log({username: username.text, password: password.text})
  };

  return (
    <Styled>
      <div className="transparent">
        <h2>LOGIN</h2>

        <div className="login-box">
          <div className="input-box">
            <Input
              placeholder="digite seu usuário"
              onChange={(evt) => setUsername({...username, text: evt.target.value})}
              type="text"
              error= {username.error ? "Usuário Necessário" : ""}
            />

            <Input
              placeholder="digite sua senha"
              type="password"
              onChange={(evt) => setPassword({...password, text: evt.target.value})}
              error= {username.error ? "Senha Necessária" : ""}
            />

            <Button onClick={handleSubmit}>LOGIN</Button>
          </div>
        </div>

        <Button onClick={()=> navigate("/")}>VOLTAR</Button>
      </div>
    </Styled>
  );
};

export default Login;
