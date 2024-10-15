import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectDetails from "./components/Projects/ProjectDetails";
import "./global.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Hero");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const setActiveComponentFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveComponent(hash.charAt(0).toUpperCase() + hash.slice(1));
    }
  };

  useEffect(() => {
    setActiveComponentFromHash();
    window.addEventListener("hashchange", setActiveComponentFromHash);
    return () => {
      window.removeEventListener("hashchange", setActiveComponentFromHash);
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About isDarkMode={isDarkMode} />;
      case "Projectdetails":
        return <ProjectDetails isDarkMode={isDarkMode} />;
      default:
        return (
          <Hero
            isDarkMode={isDarkMode}
            setActiveComponent={setActiveComponent}
          />
        );
    }
  };

  return (
    <div className={`container ${isDarkMode ? "dark" : ""}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        setActiveComponent={setActiveComponent}
      />
      {renderComponent()}
    </div>
  );
};

export default App;
