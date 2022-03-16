import Styled from "./styles";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import Category from "./templates/category"

import DivInput from "../../components/DivInput"

const Manager = () => {
  const { menu } = useMenu();

  return (
    <Styled>

      <DivInput value={"óla"} edit={true}/>
      <h2>Menu Manager</h2>

      <Button backgroundColor="var(--light-green)">Adicionar Categoria</Button>

      {menu.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </Styled>
  );
};

export default Manager;
