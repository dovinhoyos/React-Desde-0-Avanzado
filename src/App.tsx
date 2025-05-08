import { useFetch } from "./hooks";
import "./App.css";

const url = "https://api.example.com/data";
// const urlUser = "https://api.example.com/user";

interface Data {
  name: string;
  lastname: string;
  age: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);
  // const { data: dataUser, loading: loadingUser, error: errorUser } = useFetch<{name: string}>(url);

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
