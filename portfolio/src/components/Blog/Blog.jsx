import React from "react";
import styles from "./Blog.module.css";

const Blog = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  return (
    <section className={`${styles.blogSection} ${darkModeClass}`}>
      <h1 className={`${styles.blogTitle} ${darkModeClass}`}>Blog</h1>
      <p className={`${styles.blogContent} ${darkModeClass}`}>
        This is the blog section.
      </p>
    </section>
  );
};

export default Blog;
