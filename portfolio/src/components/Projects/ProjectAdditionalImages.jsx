import React from "react";
import styles from "./Project.module.css";
import phoneScreen from "../../assets/screens/phoneScreen.png";

const ProjectAdditionalImages = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  return (
    <div className={`${styles.imageColumn} ${darkModeClass}`}>
      <img
        src={phoneScreen}
        alt="Phone Screen"
        className={styles.projectImage}
      />
    </div>
  );
};

export default ProjectAdditionalImages;
