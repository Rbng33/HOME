import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import CCM from "./components/CCM";
import Phonepub from "./components/Phonepub";
import FORM from "./components/FORM"


function App() {
  return (
    <div >
      <Navbar />
      <Phonepub />
      <CCM/>
      <FORM/>
    </div>
  );
}

export default App;
