import { use, useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [data, setData] = useState([]);

const fetchData = async() => {
  try {
    const response = await fetch('http://localhost:3000/getUsers')
    const jsonData = await response.json()

    setData(jsonData)
  }catch(err){
    console.log(err);
  }
}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      
    </>
  );
}

export default App;
