import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Blogs = ({
  darkModeClass,
  textVariantsWithDelay,
  hoveredBlog,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const blogs = [
    { date: "27 Sep 2024", title: "What is React and where to learn it" },
    { date: "27 Sep 2024", title: "What is React and where to learn it" },
    { date: "27 Sep 2024", title: "What is React and where to learn it" },
    { date: "27 Sep 2024", title: "What is React and where to learn it" },
  ];

  return (
    <>
      <motion.h2
        className={`${styles.blogsTitle} ${darkModeClass}`}
        initial="hidden"
        animate="visible"
        variants={textVariantsWithDelay}>
        Latest Blogs
      </motion.h2>
      <div className={styles.blogs}>
        {blogs.map((blog, index) => (
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
    </>
  );
};

export default Blogs;
