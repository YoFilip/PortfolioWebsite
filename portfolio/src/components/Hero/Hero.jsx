import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";

const Hero = ({ isDarkMode }) => {
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

  const handleMouseEnter = (index) => {
    setHoveredBlog(index);
  };

  const handleMouseLeave = () => {
    setHoveredBlog(null);
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
            src={projectImage1}
            alt="ExpensesGraph"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            ExpensesGraph
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            A fully-functional expense management system with interactive charts
            and an extensive database, providing precise financial analysis.
          </motion.p>
        </div>
        <div className={styles.project}>
          <motion.img
            src={projectImage2}
            alt="Lazycode"
            className={styles.projectImage}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
          />
          <motion.h3
            className={styles.projectTitle}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            Lazycode
          </motion.h3>
          <motion.p
            className={styles.projectDescription}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}>
            An interactive website for quick learning of programming
          </motion.p>
        </div>
      </div>

      <motion.h2
        className={`${styles.blogsTitle} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Latest Blogs
      </motion.h2>
      <div className={styles.blogs}>
        {[
          {
            date: "27 Sep 2024",
            title: "What is React and where to learn it",
          },
          {
            date: "27 Sep 2024",
            title: "What is React and where to learn it",
          },
          {
            date: "27 Sep 2024",
            title: "What is React and where to learn it",
          },
          {
            date: "27 Sep 2024",
            title: "What is React and where to learn it",
          },
        ].map((blog, index) => (
          <motion.div
            key={index}
            className={`${styles.blog} ${
              hoveredBlog !== null && hoveredBlog !== index ? styles.dimmed : ""
            }`}
            initial="hidden"
            animate="visible"
            variants={textVariantsWithDelay}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <span className={styles.blogDate}>{blog.date}</span>
            <a href="#" className={styles.blogLink}>
              {blog.title}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
