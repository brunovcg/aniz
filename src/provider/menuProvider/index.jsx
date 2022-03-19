import React, { createContext, useState, useContext } from "react";
// import { MENU } from "../../assets/constants";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { api, endpoints } from "../../services";



const MenuContext = createContext([]);

const initialCategory = {
  id: 0,
  category: "Nova Categoria",
  description: "",
  active: false,
  position: 0,
  items: [],
};

const initialItem = {
  id: 0,
  title: "Novo Item",
  price: "0,00",
  desc: "",
  position: 0,
  active: false,
};

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
 

  const getMenu = (id) => {


    api().get(endpoints.user.getData(id)).then((res) => {

      console.log(res.data.categories)

      setMenu(res.data.categories)})
    
  };

  // --------------------------------------- CATEGORY FUNCIONS --------------------------------------------

  const addCategory = () => {
    let newCategory = _.cloneDeep(initialCategory);

    newCategory.id = uuidv4();
    newCategory.position = menu.length;

    setMenu([...menu, newCategory]);
  };

  const removeCategory = (id) => {
    let rest = menu.filter((it) => it.id !== id);

    setMenu(rest);
  };

  const moveCategory = (index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = newMenu[index];
    let posSelected = selected.position;

    if (direction === "up") {
      let before = newMenu[index - 1];
      let posBefore = before.position;

      newMenu[index].position = posBefore;
      newMenu[index - 1].position = posSelected;
      newMenu[index] = before;
      newMenu[index - 1] = selected;
    }
    if (direction === "down") {
      let after = menu[index + 1];
      let posAfter = after.position;

      newMenu[index].position = posAfter;
      newMenu[index + 1].position = posSelected;
      newMenu[index] = after;
      newMenu[index + 1] = selected;
    }

    setMenu(newMenu);
  };

  const toogleCategoryStatus = (index) => {
    const newMenu = _.cloneDeep(menu);

    newMenu[index].active = !newMenu[index].active;

    setMenu(newMenu);
  };

  const modifyCategory = (index, key, value) => {
    const newMenu = _.cloneDeep(menu);
    newMenu[index][key] = value;

    setMenu(newMenu);
  };

  // ------------------------------------ ITEM FUNCIONS --------------------------------------

  const addItem = (categoryIndex) => {
    let newMenu = _.cloneDeep(menu);
    let newItem = _.cloneDeep(initialItem);
    newItem.id = uuidv4();
    newItem.position = menu[categoryIndex].items.length;
    let items = [...newMenu[categoryIndex].items, newItem];
    newMenu[categoryIndex].items = items;

    setMenu(newMenu);
  };

  const modifyItem = (categoryIndex, index, key, value) => {
    let newMenu = _.cloneDeep(menu);

    newMenu[categoryIndex].items[index][key] = value;

    setMenu(newMenu);
  };

  const removeItem = (categoryIndex, id) => {
    let rest = _.cloneDeep(menu);
    rest[categoryIndex].items = rest[categoryIndex].items.filter(
      (it) => it.id !== id
    );
    setMenu(rest);
  };

  const moveItem = (categoryIndex, index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = newMenu[categoryIndex].items[index];
    let posSelected = selected.position;

    if (direction === "up") {
      let before = menu[categoryIndex].items[index - 1];
      let posBefore = before.position;

      newMenu[categoryIndex].items[index].position = posBefore;
      newMenu[categoryIndex].items[index - 1].position = posSelected;
      newMenu[categoryIndex].items[index] = before;
      newMenu[categoryIndex].items[index - 1] = selected;
    }

    if (direction === "down") {
      let after = menu[categoryIndex].items[index + 1];
      let posAfter = after.position;

      newMenu[categoryIndex].items[index].position = posAfter;
      newMenu[categoryIndex].items[index + 1].position = posSelected;
      newMenu[categoryIndex].items[index] = after;
      newMenu[categoryIndex].items[index + 1] = selected;
    }

    setMenu(newMenu);
  };

  const toogleItemStatus = (categoryIndex, index) => {
    const newMenu = _.cloneDeep(menu);

    newMenu[categoryIndex].items[index].active =
      !newMenu[categoryIndex].items[index].active;

    setMenu(newMenu);
  };



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
        getMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
