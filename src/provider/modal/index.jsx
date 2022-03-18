import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext([]);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalButtons, setModalButtons] = useState([]);

  const modalReset = () => {
    setShow(false)
    setModalTitle("");
    setModalContent("");
    setModalButtons([]);
  };

  const openModal = (title, content, buttons) => {
    setShow(true)
    setModalTitle(title);
    setModalContent(content);
    setModalButtons(buttons);
  }

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        modalReset,
        modalTitle,
        modalContent,
        modalButtons,
        openModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
