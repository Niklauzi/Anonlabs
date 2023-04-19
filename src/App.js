import React from "react";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Products } from "./Components/Products";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
