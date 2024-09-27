import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";

const Projects = ({ darkModeClass, textVariantsWithDelay, imageVariants }) => {
  return (
    <>
      <motion.h2
        className={`${styles.projectsTitle} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Projects created by me
      </motion.h2>
      <div className={styles.pinnedProjects}>
        <div className={styles.project}>
          <motion.img
            src={projectImage1}
            alt="ExpensesGraph"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            ExpensesGraph
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            A fully-functional expense management system with interactive charts
            and an extensive database, providing precise financial analysis.
          </motion.p>
        </div>
        <div className={styles.project}>
          <motion.img
            src={projectImage2}
            alt="Lazycode"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            Lazycode
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            An interactive website for quick learning of programming
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Projects;
