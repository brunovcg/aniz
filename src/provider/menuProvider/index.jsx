import { createContext, useState, useContext, useEffect } from "react";
import {MENU} from "../../assets/constants"

const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {

  const [menu, setMenu] = useState([])

  const getMenu = () => {

    setMenu(MENU)

  }

  const updateMenu = () => {

  }

  const createCategory = () => {

  }

  const deleteCategory = () => {

  }

  const updateCategory = () => {

  }

  const createItem = () => {

  }

  const changePosition = (type, direction, item) => {

  }

  const deleteItem = () => {

  }

  const updateItem = () => {

  }

  useEffect(()=>{
    getMenu()
  },[])

  return <MenuContext.Provider value={{menu}}>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);
