import React from "react";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Products } from "./Components/Products";
import { AireDAO } from "./Components/AireDAO";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <AireDAO />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
