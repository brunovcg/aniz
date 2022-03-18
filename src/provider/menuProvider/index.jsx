import React, { createContext, useState, useContext, useEffect } from "react";
import { MENU } from "../../assets/constants";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const MenuContext = createContext([]);

const initialCategory = {
  id: 0,
  categoryId: "",
  category: "Nova Categoria",
  description: "",
  active: false,
  position: 0,
  items: [],
};

const initialItem = {
  id: 0,
  itemId: "",
  title: "Novo Item",
  price: "0,00",
  desc: "",
  position: 0,
  active: false,
};

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    setMenu(MENU);
  };


  // --------------------------------------- CATEGORY FUNCIONS --------------------------------------------

  const addCategory = () => {
    let newCategory = _.cloneDeep(initialCategory);

    newCategory.categoryId = uuidv4();
    newCategory.position = menu.length;

    setMenu([...menu, newCategory]);
  };

  const removeCategory = (categoryId) => {
    let rest = menu.filter((it) => it.categoryId !== categoryId);

    setMenu(rest);
  };

  const moveCategory = (index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = menu[index];

    if (direction === "up") {
      let before = menu[index - 1];
      newMenu[index] = before;
      newMenu[index - 1] = selected;

      setMenu(newMenu);
    }
    if (direction === "down") {
      let after = menu[index + 1];
      newMenu[index] = after;
      newMenu[index + 1] = selected;

      setMenu(newMenu);
    }
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
    newItem.itemId = uuidv4();
    newItem.position = menu[categoryIndex].items.length;
    let items = [...newMenu[categoryIndex].items, newItem];
    newMenu[categoryIndex].items = items;

    setMenu(newMenu);
  };


  const modifyItem = (categoryIndex,index, key, value) => {
    let newMenu = _.cloneDeep(menu);

    
    newMenu[categoryIndex].items[index][key] = value;


    setMenu(newMenu);
  };

  const removeItem = (categoryIndex, itemId) => {
    let rest = _.cloneDeep(menu);
    rest[categoryIndex].items = rest[categoryIndex].items.filter(
      (it) => it.itemId !== itemId
    );
    setMenu(rest);
  };

  const moveItem = (categoryIndex, index, direction) => {
    let newMenu = _.cloneDeep(menu);
    let selected = menu[categoryIndex].items[index];

    if (direction === "up") {
      let before = menu[categoryIndex].items[index - 1];
      newMenu[categoryIndex].items[index] = before;
      newMenu[categoryIndex].items[index - 1] = selected;
      setMenu(newMenu);
    }

    if (direction === "down") {
      let after = menu[categoryIndex].items[index + 1];
      newMenu[categoryIndex].items[index] = after;
      newMenu[categoryIndex].items[index + 1] = selected;
      setMenu(newMenu);
    }
  };

  const toogleItemStatus = (categoryIndex, index) => {
    const newMenu = _.cloneDeep(menu);

    newMenu[categoryIndex].items[index].active =
      !newMenu[categoryIndex].items[index].active;

    setMenu(newMenu);
  };



  useEffect(() => {
    getMenu();
  }, []);

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
        modifyItem
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
