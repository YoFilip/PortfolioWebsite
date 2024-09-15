import React from "react";
import light_mode_icon from "../../assets/light-mode-switch.svg";
import dark_mode_icon from "../../assets/dark-mode-switch.svg";
import styles from "./Navbar.module.css";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className={styles.modeSwitch}>
          <img
            src={isDarkMode ? dark_mode_icon : light_mode_icon}
            alt="Mode Switch"
            className={styles.modeIcon}
          />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
