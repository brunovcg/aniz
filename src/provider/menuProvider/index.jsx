import React, { createContext, useState, useContext } from "react";
import _ from "lodash";
import { api, endpoints } from "../../services";
import { useUser } from "../token";
import { toast } from "react-toastify";

const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [userImages, setUserImages] = useState({ 
    background: "", 
    logo: "", 
    insta_color: "#fff",
	  category_color: "#ffffeb",
	  category_background: "#A31A2E",
	  category_description_color: "#E69C02",
	  item_color: "#ffffeb",
	  item_description_color: "#a4cf85",
	  price_color: "#ffffeb",
    transparency_index: 55
   });
  const { configs, userId } = useUser();

  const getMenu = (id) => {
    api()
      .get(endpoints.user.getData(id))
      .then((res) => {
        let sortedMenu = res.data.categories.sort(
          (a, b) => a.position - b.position
        );
        sortedMenu.forEach(
          (category, index) =>
            (sortedMenu[index].items = sortedMenu[index].items.sort(
              (a, b) => a.position - b.position
            ))
        );
        setMenu(sortedMenu);
        setUserImages({
          background: res.data.background,
          logo: res.data.logo,
          insta_color: res.data.insta_color || userImages.insta_color,
	        category_color: res.data.category_color || userImages.category_color,
	        category_background: res.data.category_background || userImages.category_background,
	        category_description_color: res.data.category_description_color || userImages.category_description_color,
	        item_color: res.data.item_color || userImages.item_color,
	        item_description_color: res.data.item_description_color || userImages.item_description_color,
	        price_color: res.data.price_color || userImages.price_color,
          transparency_index: res.data.transparency_index || userImages.transparency_index,
        });
      });
  };

  const updateColors =(attr, value,id)=> {
    let payload = {[attr] : value}
    api().patch(endpoints.user.patch(id, payload, configs).then(res=> 
      setUserImages({...userImages, [attr] : value})
      ).catch((err) => {
        toast.error("Erro, tente novamente!");
      }))
  }

  const getUserImages =(id)=> {
    api().patch(endpoints.user.images(id, configs).then(res=> {
      setUserImages({...userImages, ...res})
    }).catch((err) => {
        toast.error("Erro, tente novamente!");
      }))
  }

  // --------------------------------------- CATEGORY FUNCIONS --------------------------------------------

  const addCategory = () => {
    let newCategory = {
      user: userId,
      position: menu.length > 0 ? menu[menu.length - 1].position + 1 : 0,
      category: "Nova Categoria",
      description: "",
      active: false,
    };

    api()
      .post(endpoints.category.post, newCategory, configs)
      .then((res) => {
        newCategory.id = res.data?.id;
        newCategory.items = [];
        setMenu([...menu, newCategory]);
      })
      .catch((err) => {
        toast.error("Erro, tente novamente!");
      });
  };

  // -------------------------------------------------------------------------------------
  const rePosition = (list, type, categoryIndex) => {
    let sortedMenu = list;

    if (type === "category") {
      sortedMenu.forEach((category, index) => (category.position = index));

      sortedMenu.forEach((item, index) => {
        api().patch(
          endpoints[type].patch(item.id),
          { position: index },
          configs
        );
      });
    }

    if (type === "item") {
      sortedMenu[categoryIndex].items.forEach(
        (item, index) =>
          (sortedMenu[categoryIndex].items[index].position = index)
      );

      sortedMenu[categoryIndex].items.forEach((item, index) => {
        api().patch(
          endpoints[type].patch(item.id),
          { position: index },
          configs
        );
      });
    }

    setMenu(sortedMenu);
  };

  // -------------------------------

  const removeCategory = (id) => {
    let rest = menu.filter((it) => it.id !== id);

    api()
      .delete(endpoints.category.delete(id), configs)
      .then((res) => rePosition(rest, "category"))
      .catch((err) => {
        toast.error("Erro, tente novamente!");
      });
  };

  // -------------------------------------------------------------------------

  const moveCategory = (index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = newMenu[index];
    let selectedId = selected.id;
    let posSelected = selected.position;

    if (direction === "up") {
      let before = newMenu[index - 1];
      let beforeId = before.id;
      let posBefore = before.position;

      newMenu[index].position = posBefore;
      newMenu[index - 1].position = posSelected;
      newMenu[index] = before;
      newMenu[index - 1] = selected;

      let payloadBefore = { position: posSelected };
      let payloadSelected = { position: posBefore };

      api().patch(endpoints.category.patch(beforeId), payloadBefore, configs);
      api().patch(
        endpoints.category.patch(selectedId),
        payloadSelected,
        configs
      );
    }
    if (direction === "down") {
      let after = menu[index + 1];
      let afterId = after.id;
      let posAfter = after.position;

      newMenu[index].position = posAfter;
      newMenu[index + 1].position = posSelected;
      newMenu[index] = after;
      newMenu[index + 1] = selected;

      let payloadAfter = { position: posSelected };
      let payloadSelected = { position: posAfter };

      api().patch(endpoints.category.patch(afterId), payloadAfter, configs);
      api().patch(
        endpoints.category.patch(selectedId),
        payloadSelected,
        configs
      );
    }
    setMenu(newMenu);
  };

  // -------------------------------------------------------------------------

  const toogleCategoryStatus = (index) => {
    const newMenu = _.cloneDeep(menu);
    newMenu[index].active = !newMenu[index].active;
    let categoryId = newMenu[index].id;
    let payload = newMenu[index].active;
    api()
      .patch(endpoints.category.patch(categoryId), { active: payload }, configs)
      .then((res) => setMenu(newMenu))
      .catch((err) => toast.error("Problemas no servidor, tente mais tarde."));
  };

  // -------------------------------------------------------------------------

  const modifyCategory = (index, key, value) => {
    const newMenu = _.cloneDeep(menu);
    newMenu[index][key] = value;
    let categoryId = newMenu[index].id;
    let payload = { [key]: value };

    api()
      .patch(endpoints.category.patch(categoryId), payload, configs)
      .then((res) => {
        setMenu(newMenu);
      })
      .catch((err) => toast.error("Problemas no servidor, tente mais tarde."));
  };

  // ------------------------------------ ITEM FUNCIONS --------------------------------------

  const addItem = (categoryIndex) => {
    let newItem = {
      title: "Novo Item",
      price: "0,00",
      desc: "",
      category: menu[categoryIndex].id,
      position:
        menu[categoryIndex].items.length > 0
          ? menu[categoryIndex].items[menu[categoryIndex].items.length - 1]
              .position + 1
          : 0,
      active: false,
    };
    let newMenu = _.cloneDeep(menu);

    api()
      .post(endpoints.item.post, newItem, configs)
      .then((res) => {
        newItem.id = res.data?.id;

        let items = [...newMenu[categoryIndex].items, newItem];
        newMenu[categoryIndex].items = items;

        setMenu(newMenu);
      })
      .catch((err) => {
        toast.error("Erro, tente novamente!");
      });
  };

  // -------------------------------------------------------------------------

  const modifyItem = (categoryIndex, index, key, value) => {
    let newMenu = _.cloneDeep(menu);

    newMenu[categoryIndex].items[index][key] = value;

    let itemId = newMenu[categoryIndex].items[index].id;

    let payload = { [key]: value };

    api()
      .patch(endpoints.item.patch(itemId), payload, configs)
      .then((res) => {
        setMenu(newMenu);
      })
      .catch((err) => toast.error("Problemas no servidor, tente mais tarde."));
  };

  // -------------------------------------------------------------------------

  const removeItem = (categoryIndex, id) => {
    let rest = _.cloneDeep(menu);
    rest[categoryIndex].items = rest[categoryIndex].items.filter(
      (it) => it.id !== id
    );

    api()
      .delete(endpoints.item.delete(id), configs)
      .then((res) => {
        rePosition(rest, "item", categoryIndex);
      })
      .catch((err) =>
        toast.error("Problemas no servidor, tente mais tardexxxxx.")
      );
  };

  // -------------------------------------------------------------------------

  const moveItem = (categoryIndex, index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = newMenu[categoryIndex].items[index];
    let selectedId = selected.id;
    let posSelected = selected.position;

    if (direction === "up") {
      let before = menu[categoryIndex].items[index - 1];
      let beforeId = before.id;
      let posBefore = before.position;

      newMenu[categoryIndex].items[index].position = posBefore;
      newMenu[categoryIndex].items[index - 1].position = posSelected;
      newMenu[categoryIndex].items[index] = before;
      newMenu[categoryIndex].items[index - 1] = selected;

      let payloadBefore = { position: posSelected };
      let payloadSelected = { position: posBefore };

      api().patch(endpoints.item.patch(beforeId), payloadBefore, configs);
      api().patch(endpoints.item.patch(selectedId), payloadSelected, configs);
    }

    if (direction === "down") {
      let after = menu[categoryIndex].items[index + 1];
      let afterId = after.id;
      let posAfter = after.position;

      newMenu[categoryIndex].items[index].position = posAfter;
      newMenu[categoryIndex].items[index + 1].position = posSelected;
      newMenu[categoryIndex].items[index] = after;
      newMenu[categoryIndex].items[index + 1] = selected;

      let payloadAfter = { position: posSelected };
      let payloadSelected = { position: posAfter };

      api().patch(endpoints.item.patch(afterId), payloadAfter, configs);
      api().patch(endpoints.item.patch(selectedId), payloadSelected, configs);
    }

    setMenu(newMenu);
  };

  // -------------------------------------------------------------------------

  const toogleItemStatus = (categoryIndex, index) => {
    const newMenu = _.cloneDeep(menu);

    newMenu[categoryIndex].items[index].active =
      !newMenu[categoryIndex].items[index].active;

    let itemId = newMenu[categoryIndex].items[index].id;
    let payload = { active: newMenu[categoryIndex].items[index].active };

    api()
      .patch(endpoints.item.patch(itemId), payload, configs)
      .then((res) => {
        setMenu(newMenu);
      })
      .catch((err) => toast.error("Problemas no servidor, tente mais tarde."));
  };

  // -------------------------------------------------------------------------

  return (
    <MenuContext.Provider
      value={{
        menu,
        addCategory,
        removeCategory,
        moveCategory,
        toogleCategoryStatus,
        modifyCategory,
        toogleItemStatus,
        moveItem,
        removeItem,
        addItem,
        modifyItem,
        getMenu,
        userImages,
        updateColors,
        getUserImages
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
