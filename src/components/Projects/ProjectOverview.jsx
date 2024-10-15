import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import ProjectMainImages from "./ProjectMainImages";
import ProjectAdditionalImages from "./ProjectAdditionalImages";

const ProjectOverview = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div className={styles.row}>
      <div className={styles.column80}>
        <motion.p
          className={styles.projectContent}
          variants={textVariantsWithDelay}>
          Open source analytics dashboard built with Django with over 200k
          visitors. The dashboard provided a comprehensive and interactive
          overview of the COVID-19 pandemic.
        </motion.p>
        <motion.button
          className={`${styles.projectButton} ${darkModeClass}`}
          variants={textVariantsWithDelay}
          onClick={() => window.open("https://yourprojectlink.com", "_blank")}>
          Github Project
        </motion.button>
        <ProjectMainImages isDarkMode={isDarkMode} imageIndex={0} />
        <motion.h2
          className={`${styles.subTitleProject} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          About the Project
        </motion.h2>
        <motion.p
          className={styles.projectContent}
          variants={textVariantsWithDelay}>
          This portfolio website was built out of a passion for web development
          and to showcase my projects, skills, and experiences. It was crafted
          using React and Vite, with smooth animations powered by Framer Motion
          to enhance the user experience through fluid transitions and dynamic
          elements. The design is fully responsive, ensuring that the site
          adapts perfectly to all devices, from desktop to mobile, while
          maintaining a polished and professional look. The portfolio not only
          highlights my technical skills but also reflects my commitment to
          creating user-friendly, visually appealing, and high-performance web
          applications. With a focus on clean design and interactive features,
          this website serves as a window into my work, creativity, and
          dedication to continuous improvement.
        </motion.p>
        <ProjectMainImages isDarkMode={isDarkMode} imageIndex={1} />
        <motion.h2
          className={`${styles.subTitleProject} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          Mobile First Design
        </motion.h2>
        <motion.p
          className={styles.projectContent}
          variants={textVariantsWithDelay}>
          The portfolio was designed with a mobile-first approach, ensuring that
          the application is responsive to all platforms and viewports. Thanks
          to Framer Motion and Vite being already responsive to multi-touch
          interactions, it was just a matter of ensuring the overall layout was
          adaptable.
        </motion.p>
        <ProjectAdditionalImages isDarkMode={isDarkMode} />
        <motion.h2
          className={`${styles.subTitleProject} ${darkModeClass}`}
          variants={textVariantsWithDelay}>
          Contact
        </motion.h2>
        <motion.p
          className={styles.projectContent}
          variants={textVariantsWithDelay}
          style={{ marginBottom: "5rem" }}>
          Questions or need more details? Ping me on Discord, or email me at{" "}
          <a className={darkModeClass} href="mailto:swiatek.filip@wp.pl">
            swiatek.filip@wp.pl
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
};

export default ProjectOverview;
