import React from "react";
import "./App.css";
import { Display } from "./components";
import { useFetch } from "./hooks";

function App() {
  const { data } = useFetch('http://localhost:5000/api/players');
  console.log(data);
  return (
    <div className="App">
      <Display players={data} />
    </div>
  );
}

export default App;
