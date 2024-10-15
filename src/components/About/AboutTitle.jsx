import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const AboutTitle = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.h1
      className={`${styles.aboutTitle} ${darkModeClass}`}
      variants={textVariantsWithDelay}>
      About
    </motion.h1>
  );
};

export default AboutTitle;
