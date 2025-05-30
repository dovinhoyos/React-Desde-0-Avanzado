import "./App.css";
import { Button, ColorRed } from "./components";
import { GlobalProvider } from "./context/global.context";

function App() {
  const handleClick = () => {
    alert("Hola!");
  };
  return (
    <GlobalProvider>
      <Button parentMethod={handleClick}>Clickeame papu!</Button>
      <ColorRed>
        <Button parentMethod={handleClick}>Clickeame papu!</Button>
      </ColorRed>
    </GlobalProvider>
  );
}

export default App;
