import { MenuProvider } from "./menuProvider";
import { UserProvider } from "./token";
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <MenuProvider>{children}</MenuProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Providers;
