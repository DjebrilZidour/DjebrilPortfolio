import { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Experiences from "../pages/Experiences";
import Contact from "../pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Experiences />
      <Contact />
      <Skills />
    </>
  );
}

export default App;
