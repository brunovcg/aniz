import Styled from "./styles";

import {itens, sides} from "../../assets/constants"

const Menu = () => {
 

  return (
    <Styled>
      <div className="transparent">
        <div className="box">
          <h2>Cardápio</h2>
          <section>
            {itens &&
              itens.map((item, index) => <article key={index}> 
              <div className="title-price">
                <div className="title">{item.title}</div>
                <div className="price">R$ {item.price}</div>
              </div>
              <p className="desc">{item.desc}</p>
              </article>)}
          </section>
          <h2>Acompanhamentos</h2>
          <section>
            {sides &&
              sides.map((item, index) => <article key={index}> 
              <div className="title-price">
                <div>{item.title}</div>
              </div>
              {item.desc && <p className="desc">{item.desc}</p>}
              </article>)}
          </section>






        </div>
      </div>
    </Styled>
  );
};

export default Menu;
