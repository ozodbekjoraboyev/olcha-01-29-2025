import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Carusel from "./Component/Carusel/Carusel"
import Cardlar from "./Component/Cardlar/Cardlar";
import Catigores from "./Component/Catigores/Catigores";
import CatigoresImg from "./Component/Catigores/CatigoresImg";
import AdeniCard from "./Component/Cardlar/AdeniCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Carusel />
        <Catigores />
        <CatigoresImg />
        <Cardlar />
      </div>
    </>
  );
}

export default App;
