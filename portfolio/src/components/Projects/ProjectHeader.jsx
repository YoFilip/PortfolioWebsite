import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";

const ProjectHeader = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.h1
      className={`${styles.projectTitle} ${darkModeClass}`}
      variants={textVariantsWithDelay}>
      Portfolio Website
    </motion.h1>
  );
};

export default ProjectHeader;
