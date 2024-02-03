import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Patil</h1>
        <p className={styles.description}>
        Skilled Java Full Stack Developer proficient in React.js and Node.js.
        </p>

        <div className={styles.resume}>
        <a href="mailto:abhishekpatil1700@email.com" className={styles.contactBtn}>
          Hire Me
        </a>
     
       <a href="https://drive.google.com/file/d/1klKt2mpc8x_C_wffcl0z0xCUR2m_DrJ0/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
