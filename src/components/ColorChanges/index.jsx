import Styled from "./styles";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import ColorInput from "./templates/ColorInput";
import { useMenu } from "../../provider/menuProvider";
import { useModal } from "../../provider/modal";
import { useParams } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ColorChanges = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { userImages, updateImages, setUserImages } = useMenu();
  const { openModal, modalReset } = useModal();
  const [temporaryImages, setTemporaryImages] = useState({
    background: userImages.background,
    logo: userImages.logo,
  });

  const changeImageSettings = (key, value) => {
    setUserImages({ ...userImages, [key]: value });
  };

  const changeTemporaryImages = (key, value) => {
    setTemporaryImages({ ...temporaryImages, [key]: value });
  };

  const renderImg = (url) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ padding: "20px" }}>Pre-visualização</p>
      <img src={url} alt="img_quebrada" />
    </div>
  );

  const inputList = [
    {
      id: "transparency_index",
      label: "Transparência",
      name: "transparency_index",
      type: "number",
      value: userImages.transparency_index,
      onChange: (evt) =>
        changeImageSettings("transparency_index", evt.target.value),
      onBlur: (evt) => {
        updateImages("transparency_index", evt.target.value, userId);
      },
    },
    {
      id: "insta_color",
      label: "Insta. Link",
      name: "insta_color",
      type: "color",
      value: userImages.insta_color,
      onChange: (evt) => {
        changeImageSettings("insta_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("insta_color", evt.target.value, userId);
      },
    },
    {
      id: "category_color",
      label: "Categoria",
      name: "category_color",
      type: "color",
      value: userImages.category_color,
      onChange: (evt) => {
        changeImageSettings("category_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("insta_color", evt.target.value, userId);
      },
    },
    {
      id: "category_background",
      label: "Categoria Fundo",
      name: "category_background",
      type: "color",
      value: userImages.category_background,
      onChange: (evt) => {
        changeImageSettings("category_background", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("category_background", evt.target.value, userId);
      },
    },
    {
      id: "category_description_color",
      label: "Desc. Categoria",
      name: "category_description_color",
      type: "color",
      value: userImages.category_description_color,
      onChange: (evt) => {
        changeImageSettings("category_description_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("category_description_color", evt.target.value, userId);
      },
    },
    {
      id: "item_color",
      label: "Itens",
      name: "item_color",
      type: "color",
      value: userImages.item_color,
      onChange: (evt) => {
        changeImageSettings("item_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("item_color", evt.target.value, userId);
      },
    },
    {
      id: "item_description_color",
      label: "Itens",
      name: "item_description_color",
      type: "color",
      value: userImages.item_description_color,
      onChange: (evt) => {
        changeImageSettings("item_description_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("item_description_color", evt.target.value, userId);
      },
    },
    {
      id: "price_color",
      label: "Preços",
      name: "price_color",
      type: "color",
      value: userImages.price_color,
      onChange: (evt) => {
        changeImageSettings("price_color", evt.target.value);
      },
      onBlur: (evt) => {
        updateImages("price_color", evt.target.value, userId);
      },
    },
  ];

  const imagesList = [
    {
      id: "background",
      label: "Fundo",
      name: "background",
      type: "url",
      value: temporaryImages.background,
      onChange: (evt) => {
        changeTemporaryImages("background", evt.target.value);
      },
      onBlur: (evt) => {
        if (userImages.background !== temporaryImages.background) {
          openModal(
            "Mudar Fundo",
            renderImg(evt.target.value),
            [
              {
                text: <FaCheck />,
                onClick: () => {
                  setUserImages({
                    ...userImages,
                    background: evt.target.value,
                  });
                  updateImages("background", evt.target.value, userId);
                  modalReset();
                },
                backgroundColor: "var(--green)",
              },
              {
                text: <FaArrowRight />,
                onClick: () => {
                  setTemporaryImages({
                    ...temporaryImages,
                    background: userImages.background,
                  });

                  modalReset();
                },
                backgroundColor: "var(--regular-red)",
              },
            ],
            false
          );
        }
      },
    },
    {
      id: "logo",
      label: "Logo",
      name: "logo",
      type: "url",
      value: temporaryImages.logo,
      onChange: (evt) => {
        changeTemporaryImages("logo", evt.target.value);
      },
      onBlur: (evt) => {
        if (userImages.logo !== temporaryImages.logo) {
          openModal(
            "Mudar Logo",
            renderImg(evt.target.value),
            [
              {
                text: <FaCheck />,
                onClick: () => {
                  setUserImages({
                    ...userImages,
                    logo: evt.target.value,
                  });
                  updateImages("logo", evt.target.value, userId);
                  modalReset();
                },
                backgroundColor: "var(--green)",
              },
              {
                text: <FaArrowRight />,
                onClick: () => {
                  setTemporaryImages({
                    ...temporaryImages,
                    logo: userImages.logo,
                  });

                  modalReset();
                },
                backgroundColor: "var(--regular-red)",
              },
            ],
            false
          );
        }
      },
    },
  ];

  useEffect(() => {
    setTemporaryImages({
      logo: userImages.logo,
      background: userImages.background,
    });
  }, [userImages.background, userImages.logo]);

  return (
    <Styled>
      <h2>Settings</h2>
      <div className="boxLabels">
        <div className="button-back">
          <Button
            width="40px"
            height="40px"
            fontSize="20px"
            backgroundColor="var(--green)"
            circle
            onClick={() => {
              navigate(`/manager/`);
            }}
          >
            <FaBars />
          </Button>
          <p>Voltar</p>
        </div>
        <div className="colors">
          {inputList.map((item) => (
            <ColorInput
              key={item.id}
              id={item.id}
              type={item.type}
              label={item.label}
              value={item.value}
              onChange={item.onChange}
              onBlur={item.onBlur}
            />
          ))}
        </div>
        <div className="urls">
          {imagesList.map((item) => (
            <ColorInput
              key={item.id}
              id={item.id}
              type={item.type}
              label={item.label}
              value={item.value}
              onChange={item.onChange}
              onBlur={item.onBlur}
            />
          ))}
        </div>
      </div>
    </Styled>
  );
};

export default ColorChanges;
