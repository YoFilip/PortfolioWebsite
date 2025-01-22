import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import ProjectMainImages from "./ProjectMainImages";
import ProjectAdditionalImages from "./ProjectAdditionalImages";

const ProjectOverview = ({ isDarkMode, project }) => {
  const darkModeClass = isDarkMode ? styles.dark : "";

  const textVariantsWithDelay = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const renderProjectContent = () => {
    switch (project.toLowerCase()) {
      case "mathpath":
        return (
          <>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              MathPath is a project of an educational platform built with React
              and Vite, designed to help users understand mathematics through
              materials and practical examples. The project aims to show my
              skills and show that practical examples and non-definitional
              explanation of the subject is a more effective option of learning.
            </motion.p>
            <motion.button
              className={`${styles.projectButton} ${darkModeClass}`}
              variants={textVariantsWithDelay}
              onClick={() =>
                window.open("https://github.com/YoFilip/MathPath", "_blank")
              }>
              Github Project
            </motion.button>
            <ProjectMainImages
              isDarkMode={isDarkMode}
              project={project}
              imageIndex={0}
            />
            <motion.h2
              className={`${styles.subTitleProject} ${darkModeClass}`}
              variants={textVariantsWithDelay}>
              Lessons Section
            </motion.h2>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              MathPath offers a range of topics covering different areas of
              mathematics. Each topic includes detailed explanations of theory,
              practical examples, and interactive exercises with solutions. The
              platform is designed to respond to different learning styles,
              ensuring that users effectively learn mathematical concepts. The
              materials are designed to engage users and provide practical
              experience, which is crucial for mastering the topics.
            </motion.p>
            <ProjectMainImages
              isDarkMode={isDarkMode}
              project={project}
              imageIndex={1}
            />
            <motion.h2
              className={`${styles.subTitleProject} ${darkModeClass}`}
              variants={textVariantsWithDelay}>
              Help Center Section
            </motion.h2>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              The Help Center on MathPath addresses common questions about using
              the platform. It provides users with guidance on navigating the
              site, accessing lessons, and utilizing interactive features. This
              section ensures that users can easily find answers to their
              questions and make the most out of the educational resources
              available on MathPath.
            </motion.p>
            <ProjectMainImages
              isDarkMode={isDarkMode}
              project={project}
              imageIndex={2}
            />
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
          </>
        );
      case "portfoliowebsite":
      default:
        return (
          <>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              A responsive portfolio website built with React and Vite,
              featuring smooth animations with Framer Motion. It showcases my
              projects, skills, and experiences, with a focus on clean design,
              interactivity, and seamless user experience across all devices.
            </motion.p>
            <motion.button
              className={`${styles.projectButton} ${darkModeClass}`}
              variants={textVariantsWithDelay}
              onClick={() =>
                window.open(
                  "https://github.com/YoFilip/PortfolioWebsite",
                  "_blank"
                )
              }>
              Github Project
            </motion.button>
            <ProjectMainImages
              isDarkMode={isDarkMode}
              project={project}
              imageIndex={0}
            />
            <motion.h2
              className={`${styles.subTitleProject} ${darkModeClass}`}
              variants={textVariantsWithDelay}>
              About the Project
            </motion.h2>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              This portfolio website was built out of a passion for web
              development and to showcase my projects, skills, and experiences.
              It was crafted using React and Vite, with smooth animations
              powered by Framer Motion to enhance the user experience through
              fluid transitions and dynamic elements. The design is fully
              responsive, ensuring that the site adapts perfectly to all
              devices, from desktop to mobile, while maintaining a polished and
              professional look. The portfolio not only highlights my technical
              skills but also reflects my commitment to creating user-friendly,
              visually appealing, and high-performance web applications. With a
              focus on clean design and interactive features, this website
              serves as a window into my work, creativity, and dedication to
              continuous improvement.
            </motion.p>
            <ProjectMainImages
              isDarkMode={isDarkMode}
              project={project}
              imageIndex={1}
            />
            <motion.h2
              className={`${styles.subTitleProject} ${darkModeClass}`}
              variants={textVariantsWithDelay}>
              Mobile First Design
            </motion.h2>
            <motion.p
              className={styles.projectContent}
              variants={textVariantsWithDelay}>
              The portfolio was designed with a mobile-first approach, ensuring
              that the application is responsive to all platforms and viewports.
              Thanks to Framer Motion and Vite being already responsive to
              multi-touch interactions, it was just a matter of ensuring the
              overall layout was adaptable.
            </motion.p>
            <ProjectAdditionalImages
              isDarkMode={isDarkMode}
              project={project}
            />
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
          </>
        );
    }
  };

  return <div className={styles.row}>{renderProjectContent()}</div>;
};

export default ProjectOverview;
