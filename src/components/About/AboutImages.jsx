import React from "react";
import styles from "./About.module.css";
import aboutImage1 from "../../assets/about/image_one.jpg";
import aboutImage2 from "../../assets/about/image_two.jpg";
import aboutImage3 from "../../assets/about/image_three.jpg";
import aboutImage4 from "../../assets/about/image_four.jpg";

const AboutImages = () => {
  return (
    <div className={styles.imageRow}>
      <img src={aboutImage2} alt="Image 1" className={styles.aboutImage} />
      <img src={aboutImage4} alt="Image 2" className={styles.aboutImage} />
      <img src={aboutImage1} alt="Image 3" className={styles.aboutImage} />
      <img src={aboutImage3} alt="Image 4" className={styles.aboutImage} />
    </div>
  );
};

export default AboutImages;
