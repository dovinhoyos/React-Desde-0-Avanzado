import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {
    setCount((count) => count + 1);
    // Batching
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
  };

  const countLess = () => {
    setCount((count) => count - 1);  
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <Button label="+" parentMethod={countMore} />
        <Button label="-" parentMethod={countLess} />
      </div>
    </>
  );
}

export default App;
