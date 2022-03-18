import Router from "./routes";
import ModalCustom from "./views/Modal"
import Styled from "./styles/AppStyles.jsx"
import {useModal} from "./provider/modal"

function App() {

  const {show} = useModal()
  return (
    <Styled
      className="App"
      style={{
        
      }}
    >
      <Router />
      {show && <ModalCustom/>}
    </Styled>
  );
}

export default App;
