import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
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
      case "Blog":
        return <Blog isDarkMode={isDarkMode} />;
      case "About":
        return <About isDarkMode={isDarkMode} />;
      default:
        return <Hero isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="container">
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
