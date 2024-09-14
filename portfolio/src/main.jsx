import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Navbar from "./components/Navbar/Navbar";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);
