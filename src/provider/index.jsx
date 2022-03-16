import { MenuProvider } from "./menuProvider";
import { UserProvider } from "./token";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>{children}</MenuProvider>
    </UserProvider>
  );
};

export default Providers;
