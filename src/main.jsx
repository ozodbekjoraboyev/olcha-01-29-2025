import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Component/Navbar/Navbar.jsx";
import AdeniCard from "./Component/Cardlar/AdeniCard.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/adenicard/:alias" element={<AdeniCard />} />
    </Routes>
  </BrowserRouter>
);
