import { useState } from "react";
import "./App.css";
import { Button } from "./components";

// class UseState {
//   constructor(private value: unknown, initialValue: unknown) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   setValue(newValue: unknown) {
//     this.value = newValue;
//   }
// }

function App() {
  const [count, setCount] = useState(0);
  // let localState = 0;
  const countMore = () => {
     setCount((count) => count + 1);
  //   // - Batching
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount((count) => count + 1);
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  //   // setCount(count + 1)
  };

  const countLess = () => {
    setCount((count) => count - 1);
  };

  // const increaseLocalState = () => {
  //   localState = localState + 1;
  //   console.log("localState", localState);
  // }

  return (
    <>
      <div>
        <p>{count}</p>
        {/* <p>{localState}</p> */}
        <Button label="+" parentMethod={countMore} />
        <Button label="-" parentMethod={countLess} />
        {/* <Button label="IncreaseLocalState" parentMethod={increaseLocalState} /> */}
      </div>
    </>
  );
}

export default App;
