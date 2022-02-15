import Styled from "./styles";
import logo from "../../assets/images/logo.png";
import { FaInstagram } from "react-icons/fa";

import { itens, sides, foodies, saladas, drinks } from "../../assets/constants";

const Menu = () => {
  return (
    <Styled>
      <div className="transparent">
        <div className="logo-insta">
          <figure className="logo-box">
            <img src={logo} alt="logo" />
          </figure>
          <div className="icon">
            <a href="https://instagram.com/anizcozinha?utm_medium=copy_link">
              <FaInstagram />
              <span>
                {"      "}
                {"    anizcozinha"}
              </span>
            </a>
          </div>
        </div>
        <div className="box">
          <h2>Almoço</h2>
          <p style={{ color: "white", marginTop: "10px", fontSize: "18px" }}>
            *Escolha 2 acompanhamentos{" "}
            <span style={{ fontSize: "12px" }}>
              (exceto para o Espaguete à bolonhesa)
            </span>
          </p>
          <section>
            {itens &&
              itens.map((item, index) => (
                <article key={index}>
                  <div className="title-price">
                    <div className="title">{item.title}</div>
                    <div className="price">R$ {item.price}</div>
                  </div>
                  <p className="desc">{item.desc}</p>
                </article>
              ))}
          </section>
          <h2>Acompanhamentos</h2>
          <section>
            {sides &&
              sides.map((item, index) => (
                <article key={index}>
                  <div className="title-price">
                    <div>{item.title}</div>
                  </div>
                  {item.desc && <p className="desc">{item.desc}</p>}
                </article>
              ))}
          </section>
          <h2>Saladas</h2>
          <p style={{ color: "var(--light-green)", textAlign: "center",margin: "20px 20px 0px 20px"}}>
            Salada com mix de folhas, repolho roxo, cenoura ralada, tomate
            cereja e torradinhas. Acompanha proteína a sua escolha:
          </p>
          <section>
            {saladas &&
              saladas.map((item, index) => (
                <article key={index}>
                  <div className="title-price">
                    <div>{item.title}</div>
                    <div className="price">R$ {item.price}</div>
                  </div>
                  {item.desc && <p className="desc">{item.desc}</p>}
                </article>
              ))}
          </section>
          <h2>Salgados</h2>
          <section>
            {foodies &&
              foodies.map((item, index) => (
                <article key={index}>
                  <div className="title-price">
                    <div>{item.title}</div>
                    <div className="price">R$ {item.price}</div>
                  </div>
                  {item.desc && <p className="desc">{item.desc}</p>}
                </article>
              ))}

          </section>

          <h2>Bebidas</h2>
          <section>
            {drinks &&
              drinks.map((item, index) => (
                <article key={index}>
                  <div className="title-price">
                    <div>{item.title}</div>
                    <div className="price">R$ {item.price}</div>
                  </div>
                  {item.desc && <p className="desc">{item.desc}</p>}
                </article>
              ))}

          </section>
        </div>
      </div>
    </Styled>
  );
};

export default Menu;
