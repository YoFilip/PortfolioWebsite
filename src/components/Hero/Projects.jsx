import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import projectImage2 from "../../assets/screens/phoneScreen2.png";
import projectImage3 from "../../assets/screens/desctopScreen4.png";

const Projects = ({
  darkModeClass,
  textVariantsWithDelay,
  imageVariants,
  setActiveComponent,
}) => {
  const handleImageClick = (project) => {
    setActiveComponent("ProjectDetails");
    window.location.hash = `projectdetails/${project.toLowerCase()}`;
  };

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
            src={projectImage2}
            alt="Portfolio Website"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            onClick={() => handleImageClick("PortfolioWebsite")}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            Portfolio Website
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            A responsive website built with React, designed to showcase my
            projects and skills. It runs smoothly across different devices
            thanks to modern technology.
          </motion.p>
        </div>
        <div className={styles.project}>
          <motion.img
            src={projectImage3}
            alt="MathPath"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            onClick={() => handleImageClick("MathPath")}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            MathPath
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            MathPath is an educational platform built with React and Vite,
            designed to help users understand mathematics through interactive
            materials and practical examples. It currently supports desktop
            devices, with a mobile version planned for the future.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Projects;
