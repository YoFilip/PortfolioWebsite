import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDiscord, FaInstagram, FaArrowRight } from "react-icons/fa";
import styles from "./About.module.css";

const AboutContact = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div className={styles.row}>
      <div className={styles.column20}>
        <motion.h2
          className={`${styles.subTitleAbout} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          Contact
        </motion.h2>
      </div>
      <div className={styles.column80}>
        <motion.div
          className={`${styles.contactBox} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          <a href="https://github.com/yourusername" target="_blank">
            <FaGithub className={styles.icon} />
            GitHub
            <FaArrowRight className={styles.arrowIcon} />
          </a>
        </motion.div>
        <motion.div
          className={styles.contactBox}
          variants={textVariantsWithDelay}>
          <a href="https://discord.com/yourusername" target="_blank">
            <FaDiscord className={styles.icon} />
            Discord
            <FaArrowRight className={styles.arrowIcon} />
          </a>
        </motion.div>
        <motion.div
          className={styles.contactBox}
          variants={textVariantsWithDelay}>
          <a href="https://instagram.com/yourusername" target="_blank">
            <FaInstagram className={styles.icon} />
            Instagram
            <FaArrowRight className={styles.arrowIcon} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContact;
