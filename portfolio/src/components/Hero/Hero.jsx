import React from "react";
import styles from "./Hero.module.css";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project1.png";

const Hero = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

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
          <img
            src={projectImage1}
            alt="Project 1"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Project 1</h3>
          <p className={styles.projectDescription}>
            This is a brief description of Project 1.
          </p>
        </div>
        <div className={styles.project}>
          <img
            src={projectImage2}
            alt="Project 2"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Project 2</h3>
          <p className={styles.projectDescription}>
            This is a brief description of Project 2.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
