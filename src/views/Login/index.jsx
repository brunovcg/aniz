import Styled from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaCheck } from "react-icons/fa";
import {useUser} from "../../provider/token"



const Login = () => {
  const [username, setUsername] = useState({ text: "", error: false });
  const [password, setPassword] = useState({ text: "", error: false });


  const {login} = useUser()

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!username.text) {
      setUsername({ ...username, error: true });
    }
    if (!password.text) {
      setUsername({ ...password, error: true });
    }

    if (password.text && username.text) {
      login({username: username.text, password:password.text});
    }
  };

  return (
    <Styled>
      <div className="transparent">
        <div className="header">
          <Button
            onClick={() => navigate("/")}
            circle
            width="60px"
            height="60px"
            fontSize="30px"
          >
            <FaArrowAltCircleLeft />
          </Button>
        </div>
        <h2>LOGIN</h2>

        <div className="login-box">
          <form className="input-box">
            <Input
              placeholder="digite o usuário"
              onChange={(evt) =>
                setUsername({ ...username, text: evt.target.value })
              }
              type="text"
              error={username.error ? "Usuário necessário" : ""}
            />

            <Input
              placeholder="digite a senha"
              type="password"
              onChange={(evt) =>
                setPassword({ ...password, text: evt.target.value })
              }
              error={username.error ? "Senha necessária" : ""}
            />

            <Button
              backgroundColor="var(--light-green)"
              width="80px"
              height="80px"
              onClick={(evt) => handleSubmit(evt)}
              fontSize="50px"
              circle
            >
              <FaCheck />
            </Button>
          </form>
        </div>
      </div>
    </Styled>
  );
};

export default Login;
