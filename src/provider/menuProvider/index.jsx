import React, { createContext, useState, useContext, useEffect } from "react";
import { MENU } from "../../assets/constants";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash"

const MenuContext = createContext([]);

const initialCategory = {
  id: 0,
  categoryId: "",
  category: "",
  description: "",
  active: true,
  position: 0,
  items: [],
};

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  // const reduceRef = (idKind) => {
  //   menu.reduce((acc, value) => {
  //     acc[value[idKind]] = React.createRef();
  //     return acc;
  //   }, {});
  // };

  // const [catRefs, setCatRefs] = useState(reduceRef("categoryId"));

  // const scroolToNewCategory = (id) => {
  //   catRefs[id].current.scroolIntoView({
  //     behaviour: "smooth",
  //     block: "start",
  //   });
  // };

  const getMenu = () => {
    setMenu(MENU);
  };

  const addCategory = () => {
    let newCategory =  _.cloneDeep(initialCategory);

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

    console.log(index)

    const newMenu = _.cloneDeep(menu)

    newMenu[index][key] = value

    setMenu(newMenu);


  }

  const addItem = (categoryId) => {};
  const removeItem = (categoryId, itemId) => {};
  const moveItem = (categoryId, index, direction) => {};


  const toogleItemStatus = (categoryId, itemId) => {};

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
        modifyCategory
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
