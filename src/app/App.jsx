import { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Experiences from "../pages/Experiences";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Skill/>
      <Experiences />
      <Contact />
    </>
  );
}

export default App;
