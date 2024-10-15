import React, { useState } from "react";
import { PiCodeLight } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import styles from "./Navbar.module.css";

const Navbar = ({ isDarkMode, toggleDarkMode, setActiveComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (theme) => {
    if (
      (theme === "Light" && isDarkMode) ||
      (theme === "Dark" && !isDarkMode)
    ) {
      toggleDarkMode();
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (component) => {
    setActiveComponent(component);
    window.location.hash = component.toLowerCase();
  };

  const darkModeClass = isDarkMode ? styles.dark : "";

  return (
    <div className={`${styles["navbar-container"]} ${darkModeClass}`}>
      <nav className={`${styles.navbar} ${darkModeClass}`}>
        <a href="#home" onClick={() => handleNavigation("Hero")}>
          <PiCodeLight className={styles.logo} />
        </a>
        <ul className={`${styles["nav-links"]} ${darkModeClass}`}>
          <li className={styles["nav-item"]}>
            <a
              href="#about"
              className={styles["nav-link"]}
              onClick={() => handleNavigation("About")}>
              About
            </a>
          </li>
        </ul>
        <div className={`${styles.dropdown} ${darkModeClass}`}>
          <button
            onClick={handleMenuToggle}
            className={`${styles["theme-toggle"]} ${darkModeClass}`}>
            {isDarkMode ? (
              <LuSunMoon
                className={`${styles["theme-icon"]} ${darkModeClass}`}
              />
            ) : (
              <IoSunnyOutline
                className={`${styles["theme-icon"]} ${darkModeClass}`}
              />
            )}
          </button>
          <div
            className={`${styles["dropdown-menu"]} ${
              isMenuOpen ? styles["dropdown-menu-open"] : ""
            } ${darkModeClass}`}>
            <div
              className={`${styles["dropdown-item"]} ${
                !isDarkMode ? styles["dropdown-item"] : ""
              } ${darkModeClass}`}
              onClick={() => handleThemeChange("Light")}>
              Light
            </div>
            <div
              className={`${styles["dropdown-item"]} ${
                isDarkMode ? styles["dropdown-item"] : ""
              } ${darkModeClass}`}
              onClick={() => handleThemeChange("Dark")}>
              Dark
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
