
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HeadlineCards } from "./components/HeadlineCards";
import { Food } from "./components/Food";
import { Catagory } from "./components/Catagory";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Catagory/>
    </div>
  );
}

export default App;
