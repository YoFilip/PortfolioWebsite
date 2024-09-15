import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  return (
    <section className={`${styles.heroSection} ${darkModeClass}`}>
      <h1 className={`${styles.title} ${darkModeClass}`}>hey, Filip here!</h1>
      <p className={`${styles.description} ${darkModeClass}`}>
        I am a young developer who specializes in React to build modern web
        applications. I focus on creating interactive and responsive websites.
      </p>
      <div className={styles.socialLinks}>
        <a href="#" className={`${styles.button} ${darkModeClass}`}>
          Discord
        </a>
        <a href="#" className={`${styles.button} ${darkModeClass}`}>
          IG
        </a>
        <a href="#" className={`${styles.button} ${darkModeClass}`}>
          Tweets
        </a>
      </div>
    </section>
  );
};

export default Hero;
