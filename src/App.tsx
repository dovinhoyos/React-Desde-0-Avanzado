import "./App.css";
import { Button, ColorRed } from "./components";

function App() {
  const handleClick = () => {
    alert("Hola!");
  };
  return (
    <>
      <Button parentMethod={handleClick}>Clickeame papu!</Button>
      <ColorRed>
        <Button parentMethod={handleClick}>Clickeame papu!</Button>
      </ColorRed>
    </>
  );
}

export default App;
