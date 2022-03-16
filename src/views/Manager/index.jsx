import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";
import { FaSignOutAlt} from "react-icons/fa";
import {useUser} from "../../provider/token"

const Manager = () => {
  const { menu } = useMenu();
  const {logout} = useUser()


  

  return (
    <Styled>
      <header>
      <h2>Menu Manager</h2>
      <Button width="60px" height="60px" fontSize="20px" margin="0 50px" onClick={()=>logout()}><FaSignOutAlt/></Button>
      </header>

      <div className="container">
        
        <Button backgroundColor="var(--light-green)">
          Adicionar Categoria
        </Button>

        {menu.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Styled>
  );
};

export default Manager;
