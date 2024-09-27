import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDiscord, FaInstagram, FaArrowRight } from "react-icons/fa";
import styles from "./About.module.css";
import aboutImage1 from "../../assets/about/image_one.jpg";
import aboutImage2 from "../../assets/about/image_two.jpg";
import aboutImage3 from "../../assets/about/image_three.jpg";
import aboutImage4 from "../../assets/about/image_four.jpg";

const About = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className={`${styles.aboutSection} ${darkModeClass}`}
      initial="hidden"
      animate="visible"
      variants={textVariants}>
      <motion.h1
        className={`${styles.aboutTitle} ${darkModeClass}`}
        variants={textVariantsWithDelay}>
        About
      </motion.h1>
      <div className={styles.aboutContainer}>
        <motion.h2
          className={`${styles.subTitle} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          A little about me
        </motion.h2>
        <div className={styles.imageRow}>
          <img
            src={aboutImage2}
            alt="Image 1"
            className={styles.aboutImage}
            variants={imageVariants}
          />
          <img src={aboutImage4} alt="Image 2" className={styles.aboutImage} />
          <img src={aboutImage1} alt="Image 3" className={styles.aboutImage} />
          <img src={aboutImage3} alt="Image 4" className={styles.aboutImage} />
        </div>
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
              Hi, my name is Filip, and I was born in Poland. I've been coding
              for 8 years, and I'm currently studying at the ZSEiI in Sosnowiec,
              focusing on programming with a specialization in web development.
              <br /> <br />
              In my free time, I run a blog about coding, and I also love
              playing basketball, especially since I'm a big NBA fan. After
              school, I often spend time building websites or playing
              basketball, both of which bring me a lot of joy.
            </motion.p>
          </div>
        </div>

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
      </div>
    </motion.section>
  );
};

export default About;
