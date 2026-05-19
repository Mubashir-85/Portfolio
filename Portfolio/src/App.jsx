import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import NavbarPages from "./Components/Pages/Navbar/NavbarPages";
import HeroPage from "./Components/Pages/Hero/HeroPage";

function App() {
  return (
    <>
      <NavbarPages />
      <HeroPage/>
    </>
  );
}

export default App;
