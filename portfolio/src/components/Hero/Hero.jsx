import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project1.png";
import projectImage3 from "../../assets/project1.png";

const Hero = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const imageVariants = {
    initial: { scale: 0 },
    animate: { rotate: 360, scale: 1 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <section className={`${styles.heroSection} ${darkModeClass}`}>
      <h1 className={`${styles.heroTitle} ${darkModeClass}`}>
        hey, Filip here!
      </h1>
      <p className={`${styles.heroDescription} ${darkModeClass}`}>
        I am a young developer who specializes in React to build modern web
        applications. I focus on creating interactive and responsive websites.
      </p>
      <div className={styles.socialLinks}>
        <a href="#" className={`${styles.socialButton} ${darkModeClass}`}>
          Github
        </a>
        <a href="#" className={`${styles.socialButton} ${darkModeClass}`}>
          Discord
        </a>
        <a href="#" className={`${styles.socialButton} ${darkModeClass}`}>
          Facebook
        </a>
      </div>
      <h2 className={`${styles.projectsTitle} ${darkModeClass}`}>
        Projects created by me
      </h2>
      <div className={styles.pinnedProjects}>
        <div className={styles.project}>
          <motion.img
            src={projectImage1}
            alt="ExpensesGraph"
            className={styles.projectImage}
            initial="initial"
            animate="animate"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <h3 className={styles.projectTitle}>ExpensesGraph</h3>
          <p className={styles.projectDescription}>
            A fully-functional expense management system with interactive charts
            and an extensive database, providing precise financial analysis.
          </p>
        </div>
        <div className={styles.project}>
          <motion.img
            src={projectImage2}
            alt="Lazycode"
            className={styles.projectImage}
            initial="initial"
            animate="animate"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <h3 className={styles.projectTitle}>Lazycode</h3>
          <p className={styles.projectDescription}>
            An interactive website for quick learning of programming
          </p>
        </div>
        <div className={styles.project}>
          <motion.img
            src={projectImage3}
            alt="Password Validator"
            className={styles.projectImage}
            initial="initial"
            animate="animate"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <h3 className={styles.projectTitle}>Password Validator</h3>
          <p className={styles.projectDescription}>
            A React-based app for managing and verifying passwords against
            specific criteria including date and character checks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
