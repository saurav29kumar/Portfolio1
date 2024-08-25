import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Fotter from "./components/Fotter";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';
function App(){
  return(
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experiance/>
        <Contact/>
        <Fotter/>
      </div>
      <Toaster />
    </>
  )
}
export default App;