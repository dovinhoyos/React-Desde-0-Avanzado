import { useEffect, useState } from "react";
import "./App.css";

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
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
