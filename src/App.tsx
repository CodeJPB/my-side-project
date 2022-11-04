import React from "react";
import "./App.css";
import MyCvOnline from "./components/MyCvOnline/MyCvOnline";
import { cv } from "./data/cv";

function App() {
  return (
    <div className="App">
      <MyCvOnline cv={cv} />
    </div>
  );
}

export default App;
