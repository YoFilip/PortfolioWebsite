import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const HeroLinks = ({ darkModeClass, textVariantsWithDelay }) => {
  return (
    <div className={styles.socialLinks}>
      <motion.a
        href="https://github.com/YoFilip"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Github
      </motion.a>
      <motion.a
        href="https://discord.gg/WPY4GMu4"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Discord
      </motion.a>
      <motion.a
        href="https://www.instagram.com/yoofilip?igsh=cHMzYzRqc3Qydmtq&utm_source=qr"
        className={`${styles.socialButton} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Instagram
      </motion.a>
    </div>
  );
};

export default HeroLinks;
