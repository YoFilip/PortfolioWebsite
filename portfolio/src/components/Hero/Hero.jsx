import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import HeroLinks from "./HeroLinks";
import Projects from "./Projects";

const Hero = ({ isDarkMode, setActiveComponent }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className={`${styles.heroSection} ${darkModeClass}`}>
      <motion.h1
        className={`${styles.heroTitle} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariants}>
        hey, Filip here!
      </motion.h1>
      <motion.p
        className={`${styles.heroDescription} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        I am a young developer who specializes in React to build modern web
        applications. I focus on creating interactive and responsive websites.
      </motion.p>
      <HeroLinks
        darkModeClass={darkModeClass}
        textVariantsWithDelay={textVariantsWithDelay}
      />
      <Projects
        darkModeClass={darkModeClass}
        textVariantsWithDelay={textVariantsWithDelay}
        imageVariants={imageVariants}
        setActiveComponent={setActiveComponent} // Przekazanie setActiveComponent
      />
    </section>
  );
};

export default Hero;
