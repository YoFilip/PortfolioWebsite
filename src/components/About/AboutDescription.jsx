import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const AboutDescription = ({ isDarkMode }) => {
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
          About
        </motion.h2>
      </div>
      <div className={styles.column80}>
        <motion.p
          className={styles.aboutContent}
          variants={textVariantsWithDelay}>
          Hi, my name is Filip, and I was born in Poland. I've been coding for 8
          years and am currently studying at ZSEiI in Sosnowiec, specializing in
          web development.
          <br /> <br />
          In my free time, I write a blog about coding and enjoy playing
          basketball, especially as a big NBA fan. After school, I often spend
          my time building websites or playing basketball, both of which bring
          me great joy.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutDescription;
