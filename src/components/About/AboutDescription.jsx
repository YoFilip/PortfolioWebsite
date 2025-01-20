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
    <>
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
            I am a young programmer with a passion for creating modern websites
            and applications. I specialize in React and Node.js, combining
            learning with practical project development. I am looking for
            opportunities to grow further in the IT industry.
            <br /> <br />
            In my free time, I write a blog about coding and enjoy playing
            basketball, especially as a big NBA fan. After school, I often spend
            my time building websites or playing basketball, both of which bring
            me great joy.
          </motion.p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column20}>
          <motion.h2
            className={`${styles.subTitleAbout} ${darkModeClass}`}
            variants={textVariantsWithDelay}>
            Experience
          </motion.h2>
        </div>
        <div className={styles.column80}>
          <div>
            <motion.p
              className={styles.aboutContent}
              variants={textVariantsWithDelay}>
              <strong>
                Intern - Web Developer (Laravel) | Tech-Studio (2023)
              </strong>
            </motion.p>
            <motion.ul
              className={styles.aboutContent}
              variants={textVariantsWithDelay}>
              <li>
                Integration of an API for generating and publishing articles on
                websites based on user prompts
              </li>
              <li>
                Implementation of a backend using Laravel PHP to handle article
                data processed by AI in various languages
              </li>
              <li>Designing dynamic user interfaces with Livewire</li>
              <li>
                Utilizing Webpack and Docker for efficient application
                development and deployment
              </li>
              <li>
                Collaborating with the team to integrate AI-generated content
                into existing platforms
              </li>
              <li>
                Troubleshooting and debugging the system to ensure smooth
                operation of the AI bot
              </li>
              <li>Creating website content and optimizing SEO for clients</li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column20}>
          <motion.h2
            className={`${styles.subTitleAbout} ${darkModeClass}`}
            variants={textVariantsWithDelay}>
            Education
          </motion.h2>
        </div>
        <div className={styles.column80}>
          <motion.p
            className={styles.aboutContent}
            variants={textVariantsWithDelay}>
            <strong>ZSEII in Sosnowiec | IT Technician</strong>
            <br />
            2021 – Currently (pre-final year of study)
            <br />
            Specialization: Programmer
            <br />
            <br />
            <strong>SP 22 in Sosnowiec</strong>
            <br />
            2013 - 2021
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutDescription;
