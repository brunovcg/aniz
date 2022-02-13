import Styled from "./styles";
import logo from "../../assets/images/logo.png"

import {itens, sides, foodies, saladas} from "../../assets/constants"

const Menu = () => {
 

  return (
    <Styled>
      <div className="transparent">
        <figure className="logo-box">
          <img src={logo} alt="logo" />
        </figure>
        <div className="box">
          <h2>Almoço</h2>
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
          <h2>Saladas</h2>
          <section>
            {saladas &&
              saladas.map((item, index) => <article key={index}> 
              <div className="title-price">
                <div>{item.title}</div>
                <div className="price">R$ {item.price}</div>
              </div>
              {item.desc && <p className="desc">{item.desc}</p>}
              </article>)}
          </section>
          <h2>Comidinhas</h2>
          <section>
            {foodies &&
              foodies.map((item, index) => <article key={index}> 
              <div className="title-price">
                <div>{item.title}</div>
                <div className="price">R$ {item.price}</div>
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
