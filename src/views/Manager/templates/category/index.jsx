import Button from "../../../../components/Button";
import Item from "../Item"

const Category = ({ category, edit }) => {
  return (
    <div>
      <div>
        <h2>{category?.category}</h2>
        <Button>Excluir</Button>
        <Button>Desativar</Button>
        <Button>Adicionar Item</Button>
        <Button>Seta Cima</Button>
        <Button>Seta Baixo</Button>
      </div>

      <h3>{category?.description}</h3>

      <div>
        {category?.items.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Category;
