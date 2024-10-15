import React from "react";
import styles from "./Project.module.css";
import projectImage1 from "../../assets/screens/desctopScreen.png";
import projectImage2 from "../../assets/screens/desctopScreen2.png";

const ProjectMainImages = ({ isDarkMode, imageIndex }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const images = [projectImage1, projectImage2];
  const selectedImage = images[imageIndex];

  return (
    <div className={`${styles.imageColumn} ${darkModeClass}`}>
      <img
        src={selectedImage}
        alt={`Desctop Screen Image ${imageIndex + 1}`}
        className={styles.projectImage}
      />
    </div>
  );
};

export default ProjectMainImages;
