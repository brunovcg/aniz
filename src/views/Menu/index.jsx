import Styled from "./styles";
import { FaInstagram } from "react-icons/fa";
import { useMenu } from "../../provider/menuProvider";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../provider/token";
import ColorChanges from "../../components/ColorChanges";

const Menu = () => {
  const { menu, getMenu, userImages } = useMenu();
  const { token } = useUser();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    getMenu(userId);
    /* eslint-disable-next-line*/
  }, [userId]);

  return (
    <Styled webStyling={userImages}>
      <div className="transparent">
        <div className="logo-insta">
          <figure className="logo-box">
            <img src={userImages.logo} alt="IMAGEM LOGO QUEBRADA, SELECIONE OUTRA!" />
          </figure>

          {token && <ColorChanges />}
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
          {menu
            .filter((item) => item.active)
            .sort((a, b) => a.position - b.position)
            .map((category) => (
              <section key={category.id}>
                <div className="category-title-description">
                  <h2 className="category-title">{category.category}</h2>
                  {category?.description && (
                    <p className="category-description">
                      {category.description}
                    </p>
                  )}
                </div>
                {category.items
                  .filter((item) => item.active)
                  .sort((a, b) => a.position - b.position)
                  .map((item) => (
                    <article key={item.id}>
                      <div className="title-price">
                        <div className="title">{item.title}</div>
                        <div className="price">
                          {item.price ? "R$ " + item.price : ""}
                        </div>
                      </div>
                      <p className="desc">{item.desc}</p>
                    </article>
                  ))}
              </section>
            ))}
        </div>
        <details className="management">
          <summary>Meu Restaurante</summary>
          <div className="button-box">
            <Button onClick={() => navigate("/login")}>Área Restrita</Button>
          </div>
        </details>
      </div>
    </Styled>
  );
};

export default Menu;
