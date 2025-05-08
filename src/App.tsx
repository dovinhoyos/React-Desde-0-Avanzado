import { useFetch } from "./hooks";
import "./App.css";

const url = "www.example.com";

function App() {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <p>Loading........</p>;
  }

  if (error) {
    return <p>Ups! hay un error: {error.message}</p>;
  }

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
