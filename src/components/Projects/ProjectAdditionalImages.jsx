import React from "react";
import styles from "./Project.module.css";
import phoneScreen from "../../assets/screens/phoneScreen.png";
import mathPathImage3 from "../../assets/screens/desctopScreen5.png";

const ProjectAdditionalImages = ({ isDarkMode, project }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const images = {
    portfoliowebsite: [phoneScreen],
    mathpath: [mathPathImage3],
  };

  const projectImages = images[project.toLowerCase()] || [];

  return (
    <div className={`${styles.imageColumn} ${darkModeClass}`}>
      {projectImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Additional Image ${index + 1}`}
          className={styles.projectImage}
        />
      ))}
    </div>
  );
};

export default ProjectAdditionalImages;
