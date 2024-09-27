import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const HeroLinks = ({ darkModeClass, textVariantsWithDelay }) => {
  return (
    <div className={styles.socialLinks}>
      <motion.a
        href="#"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Github
      </motion.a>
      <motion.a
        href="#"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Discord
      </motion.a>
      <motion.a
        href="#"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Facebook
      </motion.a>
    </div>
  );
};

export default HeroLinks;
