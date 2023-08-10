import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BbqArea from "../src/Components/Service/BbqArea";
import NavigationBar from "./Components/Miscellaneous/NavigationBar";
import Footer from "./Components/Footer/Footer";
import CNCPanelCutter from "./Components/Service/CNCPanelCutter";
import Pergolas from "./Components/Service/Pergolas";
import GlassRooms from "./Components/Service/GlassRooms";
import AboutUs from "./Components/AboutUs/AboutUs";
import CarParkShade from "./Components/Service/CarParkShade";
import AluDoorWindow from "./Components/Service/AluDoorWindow";
import TopNav from "./Components/TopNav/TopNav";
import { useEffect, useRef, useState } from "react";

function App() {
  const myElementRef = useRef(null);
  const [randomValue, setRandomValue] = useState(0);
  useEffect(() => {
    if (myElementRef.current) {
      const height = myElementRef.current.offsetHeight;
      document.getElementById("main-header").style.marginBottom =
        "-" + height + "px";
      console.log("Height:", height);
      localStorage.setItem("headerMarginHeight", height);
    }
  }, [randomValue]);

  useEffect(() => {
    // Generate a random value and set it as the dependency
    setRandomValue(Math.random());
  }, []);

  return (
    <div>
      <header id="main-header" ref={myElementRef}>
        <TopNav />
        <NavigationBar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bbq-area" element={<BbqArea />} />
        <Route path="/cnc-panel-cutter" element={<CNCPanelCutter />} />
        <Route path="/pergolas" element={<Pergolas />} />
        <Route path="/glass-rooms" element={<GlassRooms />} />
        <Route path="/car-parking-shades" element={<CarParkShade />} />
        <Route path="/aluminium-doors" element={<AluDoorWindow />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
