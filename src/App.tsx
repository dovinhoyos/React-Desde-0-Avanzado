import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/getUsers");

      if (!response.ok) {
        throw new Error("Error al obtener la data");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading........</p>;
  }

  if (error) {
    return <p>Ups! hay un error: {error}</p>;
  }

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
