import React from "react";
import styles from "./Project.module.css";
import projectImage1 from "../../assets/screens/desctopScreen.png";
import projectImage2 from "../../assets/screens/desctopScreen2.png";
import mathPathImage1 from "../../assets/screens/desctopScreen3.png";
import mathPathImage2 from "../../assets/screens/desctopScreen4.png";
import mathPathImage3 from "../../assets/screens/desctopScreen5.png";

const ProjectMainImages = ({ isDarkMode, project, imageIndex }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const images = {
    portfoliowebsite: [projectImage1, projectImage2],
    mathpath: [mathPathImage1, mathPathImage2, mathPathImage3],
  };

  const selectedImage = images[project.toLowerCase()]
    ? images[project.toLowerCase()][imageIndex]
    : null;

  if (!selectedImage) {
    return null;
  }

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
