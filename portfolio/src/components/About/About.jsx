import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import AboutTitle from "./AboutTitle";
import AboutImages from "./AboutImages";
import AboutDescription from "./AboutDescription";
import AboutContact from "./AboutContact";

const About = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.section
      className={`${styles.aboutSection} ${darkModeClass}`}
      initial="hidden"
      animate="visible"
      variants={textVariants}>
      <AboutTitle isDarkMode={isDarkMode} />
      <div className={styles.aboutContainer}>
        <motion.h2
          className={`${styles.subTitle} ${darkModeClass}`}
          variants={textVariants}>
          A little about me
        </motion.h2>
        <AboutImages />
        <AboutDescription isDarkMode={isDarkMode} />
        <AboutContact isDarkMode={isDarkMode} />
      </div>
    </motion.section>
  );
};

export default About;
