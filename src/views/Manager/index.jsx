import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category";

const Manager = () => {
  const { menu } = useMenu();

  return (
    <Styled>
      <h2>Menu Manager</h2>

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
