import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";

const ProjectDetails = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? "dark" : "";

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.section
      className={`${styles.projectSection} ${darkModeClass}`}
      initial="hidden"
      animate="visible"
      variants={textVariants}>
      <div className={`${styles.projectContainer} ${darkModeClass}`}>
        <ProjectHeader isDarkMode={isDarkMode} />
        <ProjectOverview isDarkMode={isDarkMode} />
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
